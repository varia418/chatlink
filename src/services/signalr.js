import { HubConnectionBuilder } from '@microsoft/signalr';
import Message from '../components/Message';
import $ from 'jquery';

const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:5001/hubs/chat')
    .withAutomaticReconnect()
    .build();

connection.start()
    .then(result => {
        console.log('Connected!');

        connection.on('ReceiveMessage', newMessage => {
            $("#chatSpace").append(<Message content={newMessage.content} personal={Math.random() < 0.5} />);
        });
    })
    .catch(e => console.log('Connection failed: ', e));

export default connection;