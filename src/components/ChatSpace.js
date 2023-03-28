import './ChatSpace.css';
import { useState, useEffect } from 'react';
import InputToolbar from './InputToolbar';
import { HubConnectionBuilder } from '@microsoft/signalr';
import MessagesContainer from './MessagesContainer';
import ChatHeader from './ChatHeader';
import { useDispatch } from 'react-redux';
import { addMessage } from '../features/messagesSlice';

export default function ChatSpace(props) {
    const dispatch = useDispatch();
    const [connection, setConnection] = useState();

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/chat')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);



    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');

                    connection.on('ReceiveMessage', newMessage => {
                        // const chatSpace = $("#chatSpace")[0];
                        // chatSpace.appendChild(<Message key={Math.random()} message={newMessage.message} personal={newMessage.user === "user1"} />)
                        // chatSpace.scrollTop = chatSpace.scrollHeight;
                        dispatch(addMessage(newMessage));
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    return (
        <div id='chatSpace'>
            <ChatHeader />
            <MessagesContainer />
            <InputToolbar connection={connection} />
        </div>
    );
}