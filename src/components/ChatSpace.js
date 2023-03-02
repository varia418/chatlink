import './ChatSpace.css';
import { useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../features/messagesSlice';
import $ from 'jquery';

function ChatSpace(props) {
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.message)

    useEffect(() => {
        dispatch(setMessages([
            { user: "user2", message: "This is a very super extreme mega ultra fantastic incredible spectacular freak ultimate remarkable notable stunning unbelievable exceeding extraordinaire phenomenal ever long message" },
            { user: "user1", message: "test1" },
            { user: "user1", message: "test2" },
            { user: "user2", message: "test3" },
            { user: "user1", message: "test4" },
            { user: "user2", message: "test5" },
            { user: "user1", message: "This is a very super extreme mega ultra fantastic incredible spectacular freak ultimate remarkable notable stunning unbelievable exceeding extraordinaire phenomenal ever long message" },
            { user: "user1", message: "test1" },
            { user: "user1", message: "test2" },
            { user: "user2", message: "test3" },
            { user: "user1", message: "test4" },
            { user: "user 2", message: "kaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbaskaudbuaibfcsjkxzcnvnmlcvnjosduihafounsjzakcnaskchbas" }
        ]));
    }, [])

    useEffect(() => {
        const messages = $(".message");
        if (messages.length > 0) {
            const last_element = messages[messages.length - 1];
            last_element.scrollIntoView();
        }
    }, [chatMessages]);

    return (
        <div id='chatSpace'>
            {
                chatMessages && chatMessages.map(chatMessage => <Message key={Math.random()} message={chatMessage.message} personal={chatMessage.user === "user1"} />)
            }
        </div>
    )
}

export default ChatSpace;