import { useIndex } from "../../data/hooks/pages/useIndex.page";
import styles from "../styles/pages/index.module.css"
import TextInput from "../components/inputs/TextInputs/TextInput";
import Tweet from "../components/data-display/Tweet/Tweet";

const tweet = {
    date: 'há 5 dias',
    text: 'teste mensagem texarea',
    user: {
        name:'Lutchen',
        username:'Lutchen1',
        picture: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Homem-Aranha-PNG-1016x1024.png',
    },

};

export default function Index() {
    const { user } = useIndex();
    return (
    <div>
        <h1 className={styles['page-title']} >TreinaTweet</h1>
        <div className={styles['tweet-container']}>
            <img src={user.picture} alt={user.name} className={styles['avatar']} />
            <TextInput />
        </div>    
        <div className={styles['button-container']}>
            <div> 0 / 250 </div>
            <button className={styles['post-button']}>Tweetar</button>
        </div>
        <ul className={styles['tweet-list']}>      
            <li className={styles['tweet-list-item']}>
                <Tweet tweet={tweet} />
            </li>      
            <li className={styles['tweet-list-item']}>
                <Tweet tweet={tweet} />
            </li>     
            <li className={styles['tweet-list-item']}>
                <Tweet tweet={tweet} />
            </li>     
        </ul>        
    </div>
    );
}