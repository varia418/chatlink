import styles from './MessagesContainer.module.css';
import messageStyles from './Message.module.css';
import { useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../features/messagesSlice';
import $ from 'jquery';

function MessagesContainer(props) {
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.message)

    useEffect(() => {
        dispatch(setMessages([
            { user: "user2", content: "This is a very super extreme mega ultra fantastic incredible spectacular freak ultimate remarkable notable stunning unbelievable exceeding extraordinaire phenomenal ever long message" },
            { user: "user1", content: "test1" },
            { user: "user1", content: "test2" },
            { user: "user2", content: "test3" },
            { user: "user1", content: "test4" },
            { user: "user2", content: "test5" },
            { user: "user1", content: "This is a very super extreme mega ultra fantastic incredible spectacular freak ultimate remarkable notable stunning unbelievable exceeding extraordinaire phenomenal ever long message" },
            { user: "user1", content: "test1" },
            { user: "user1", content: "test2" },
            { user: "user2", content: "test3" },
            { user: "user1", content: "test4" },
            { user: "user2", content: "kaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbas" }
        ]));
    }, [])

    useEffect(() => {
        const messages = $(`.${messageStyles.message}`);
        if (messages.length > 0) {
            const last_element = messages[messages.length - 1];
            last_element.scrollIntoView();
        }
    }, [chatMessages]);

    return (
        <div id={styles.messageContainer}>
            {
                chatMessages && chatMessages.map(chatMessage => <Message key={Math.random()} content={chatMessage.content} personal={chatMessage.user === "user1"} />)
            }
        </div>
    )
}

export default MessagesContainer;