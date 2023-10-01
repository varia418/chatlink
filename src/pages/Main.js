import "./Main.css";
import ChatSpace from '../components/ChatSpace';
import Sidebar from '../components/Sidebar';
import jwtDecode from "jwt-decode";
import ls from 'local-storage';
import { UseToken } from '../contexts/token';
import CreateConversationModal from "../components/CreateConversationModal";

function Main() {
    const user = jwtDecode(ls("token"));
    return (
        <div id="main">
            <CreateConversationModal />
            <Sidebar userId={user.Id} />
            <ChatSpace />
        </div>
    );
}

export default Main;