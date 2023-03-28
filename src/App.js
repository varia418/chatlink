import './App.css';
import ChatSpace from './components/ChatSpace';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
