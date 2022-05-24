import styles from './TextInput.module.css'

export default function TextInput(props) {
    return (
    <div>
        <textArea className={styles['input']} {...props} />    
    </div> 
    );
}