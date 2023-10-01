import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import { TokenProvider } from './contexts/token';
import ls from 'local-storage';

function App() {
    return (
        <TokenProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/app' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                </Routes>
            </Router >
        </TokenProvider >
    );
}

export default App;
