import styles from './Conversation.module.css';
import $ from 'jquery';
import { useEffect, useRef } from 'react';

export default function Conversation(props) {
    const ref = useRef(null);

    function deselectPreviousConversation() {
        const conversations = $('.' + styles.conversation);
        conversations.toArray().forEach(conversation => {
            conversation.classList.remove(styles.selected);
        });
    }

    useEffect(() => {
        function selectConversation() {
            deselectPreviousConversation();
            this.classList.add(styles.selected);
        }

        const conversation = ref.current;
        conversation.addEventListener("click", selectConversation);

        return () => {
            conversation.removeEventListener('click', selectConversation);
        };
    }, []);


    return (
        <div ref={ref} className={styles.conversation}>
            <div className={styles.left}>
                <img className={styles.avatar} src={require("../assets/jack-frost.jpg")} alt='avatar' />
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>Jack Frost</h2>
                <p className={styles.latestMessage}>hello</p>
            </div>
        </div>
    );
}