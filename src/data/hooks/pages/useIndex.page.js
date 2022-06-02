import { useApi, memo } from "../useApi";
import { useMemo, useState } from "react";
import { Apiservice } from "../../services/ApiService";
import { mutate } from "swr";

export function useIndex(){
    
    const maxTextLength = 124,
        user = {
        name:'Lutchen',
        username:'Lutchen1',
        picture: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Homem-Aranha-PNG-1016x1024.png',
    },
    [text,setText] = useState(''),
    tweetList = useApi('tweets').data,
    sortedTweetList = useMemo(()=>{
        return (tweetList || []).sort((a,b) => (a.data.date < b.data.date ? 1 : -1 ));                  
    },[tweetList]);

    function onTextChange(event){
        const text = event.data.text;

        if (text.length <= maxTextLength){
            setText(text);
        }
    }

    async function sendTweet(){
        await Apiservice.post('tweets',{
            data: {
                user,
                text,
                data: new Date().toISOString()
            },
        });
        setText('');
        mutate('tweets');
    }

    return {
        user,
        text,
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList,
    };

}