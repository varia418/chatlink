import './Conversation.css';
import $ from 'jquery';
import { useEffect, useRef } from 'react';

export default function Conversation(props) {
    const ref = useRef(null);

    function deselectPreviousConversation() {
        const conversations = $(".conversation");
        conversations.toArray().forEach(conversation => {
            conversation.classList.remove("selected");
        });
    }

    useEffect(() => {
        function selectConversation() {
            deselectPreviousConversation();
            this.classList.add("selected");
        }

        const conversation = ref.current;
        conversation.addEventListener("click", selectConversation);

        return () => {
            conversation.removeEventListener('click', selectConversation);
        };
    }, []);


    return (
        <div ref={ref} className="conversation">
            <div className='left'>
                <img className='avatar' src={require("../assets/jack-frost.jpg")} alt='avatar' />
            </div>
            <div className='right'>
                <h2 className='title'>Jack Frost</h2>
                <p className='latestMessage'>hello</p>
            </div>
        </div>
    );
}