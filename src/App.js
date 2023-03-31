import './App.css';
import Main from './pages/Main';
import Landing from './pages/Landing';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/app' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Registration />} />
            </Routes>
        </Router >
    );
}

export default App;
