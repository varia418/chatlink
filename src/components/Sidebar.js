import styles from './Sidebar.module.css';
import conversationStyles from './Conversation.module.css';
import Conversation from './Conversation';
import $ from 'jquery'
import { useEffect } from 'react';


export default function Sidebar(props) {
    const conversations = [1, 2, 3, 4];
    useEffect(() => {
        const categories = $('.' + styles.category);

        function deselectPreviousCategory() {
            categories.toArray().forEach(category => {
                category.classList.remove(styles.selected);
            });
        }

        function selectCategory() {
            deselectPreviousCategory();
            this.classList.add(styles.selected);
        }

        categories.toArray().forEach(category => {
            category.addEventListener("click", selectCategory);
        });
    }, []);

    useEffect(() => {
        $('.' + styles.category)[0].click();
        $('.' + conversationStyles.conversation)[0].click();
    }, [])


    return (
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <h1>Chat</h1>
                <button className={styles.createButton}>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
            </div>

            <div className={styles.categories}>
                <span className={styles.category}>
                    All
                </span>
                <span className={styles.category}>
                    DMs
                </span>
                <span className={styles.category}>
                    Group
                </span>
            </div>

            <div className={styles.conversationContainer}>
                {conversations.map(conversation => <Conversation key={Math.random()} />)}
            </div>

        </div>
    );
}