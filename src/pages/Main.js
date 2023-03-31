import "./Main.css";
import ChatSpace from '../components/ChatSpace';
import Sidebar from '../components/Sidebar';

function Main() {
    return (
        <div id="main">
            <Sidebar />
            <ChatSpace />
        </div>
    );
}

export default Main;