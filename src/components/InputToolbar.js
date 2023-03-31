import styles from "./InputToolbar.module.css";
import { useState } from "react";

export default function InputToolbar(props) {
    const [message, setMessage] = useState("");

    async function sendMessage(e) {
        e.preventDefault();

        const isMessageProvided = message && message !== "";
        if (isMessageProvided) {
            const chatMessage = {
                userId: "1",
                content: message
            };

            if (props.connection.state === "Connected") {
                try {
                    await props.connection.send('SendMessage', chatMessage);
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                alert('No connection to server yet.');
            }
        }

        setMessage("");
    }

    function updateMessage(e) {
        setMessage(e.target.value);
    }

    return (
        <div id={styles.inputToolbar}>
            <button><ion-icon name="image-outline"></ion-icon></button>
            <button><ion-icon name="attach-outline"></ion-icon></button>
            <form onSubmit={sendMessage}>
                <input id={styles.textInput} value={message} onChange={updateMessage} />
                <button className={styles.emojiButton}><ion-icon name="happy-outline"></ion-icon></button>
            </form>
            <button onClick={sendMessage}><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>
        </div>
    );
}