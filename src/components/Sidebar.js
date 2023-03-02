import './Sidebar.css'
import Conversation from './Conversation';
import $ from 'jquery'
import { useEffect } from 'react';


export default function Sidebar(props) {

    const conversations = [1, 2, 3, 4];
    useEffect(() => {
        const categories = $(".category");

        function deselectPreviousCategory() {
            categories.toArray().forEach(category => {
                category.classList.remove("selected");
            });
        }

        function selectCategory() {
            deselectPreviousCategory();
            this.classList.add("selected");
        }

        categories.toArray().forEach(category => {
            category.addEventListener("click", selectCategory);
        });
    }, []);

    useEffect(() => {
        $(".category")[0].click();
        $(".conversation")[0].click();
    }, [])

    return (
        <div className="sidebar">
            <div className="header">
                <h1>Chat</h1>
                <button className='createButton'>
                    <ion-icon name="create-outline"></ion-icon>
                </button>
            </div>

            <div className="categories">
                <span className='category'>
                    All
                </span>
                <span className='category'>
                    DMs
                </span>
                <span className='category'>
                    Group
                </span>
            </div>

            <div className="conversationContainer">
                {conversations.map(conversation => <Conversation key={Math.random()} />)}
            </div>

        </div>
    );
}