import { useState, useEffect } from "react";
import {ViewContext} from './ViewContext';

const ViewProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });
    const [adminUser, setAdminUser] = useState({
        id: "",
        name: "",
        email: "",
        role: ""
    });
    const [loggedOut,setLoggedOut] = useState(false)
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);
    return(
        <ViewContext.Provider value={
            {
                darkMode,
                setDarkMode,
                adminUser,
                setAdminUser,
                setLoggedOut,
                loggedOut
            }
        }>
            {children}
        </ViewContext.Provider>
    )
}

export default ViewProvider