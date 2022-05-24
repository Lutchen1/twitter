import { useIndex } from "../../data/hooks/pages/useIndex.page";
import { styles } from "../styles/pages/index.module.css"
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
    useIndex();
    return <div>
        <TextInput />
        <Tweet tweet={tweet} />
    </div>;
}