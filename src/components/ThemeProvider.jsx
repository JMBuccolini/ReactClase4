import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleTheme = (e) => {
        if (e.target.value === "light") {
            let element = document.body;
            setTheme(()=>{
                element.classList.remove('dark')
                element.classList.toggle('light')})
        } else {
            let element = document.body;
            setTheme(()=>{
                element.classList.remove('light')
                element.classList.toggle('dark')})
        }
    };

    const data = { theme, handleTheme };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;
