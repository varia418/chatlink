import { createContext, useContext, useState } from "react";
import ls from 'local-storage';

const TokenContext = createContext(null);

const UseToken = () => useContext(TokenContext);

const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(ls("token"));
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
}

export { UseToken, TokenProvider };