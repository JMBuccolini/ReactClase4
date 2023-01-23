import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState();
    let element = document.body;
    const handleTheme = (e) => {
        if (e.target.value === "dark") {
            setTheme(element.className= 'dark')
        } else {
            setTheme(element.className='light')
        }
    };

    const data = { theme, handleTheme };

    return <ThemeContext.Provider value={data}>
                    {children}
            </ThemeContext.Provider>
}

export default ThemeProvider;
