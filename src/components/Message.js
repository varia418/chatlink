import styles from './Message.module.css'

export default function Message(props) {
    return (
        <div className={styles.message + (props.personal ? ` ${styles.personal}` : "")}>
            {props.content}
        </div>
    );
}