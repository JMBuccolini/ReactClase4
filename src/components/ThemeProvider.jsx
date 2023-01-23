import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

   
    
    const handleTheme = (e) => {
        if (e.target.value === "dark") {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };



    const data = {theme, handleTheme};

    return <ThemeContext.Provider value={data}>
                    {children}
            </ThemeContext.Provider>
}

export default ThemeProvider;
