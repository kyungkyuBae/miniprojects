import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider ({children}){
    const [darkMode,setDarkMode] = useState(readDarkMode());
    const handleDarkMode = ()=> {
        setDarkMode(!darkMode)
        updateDarkMode(!darkMode)
    }
    useEffect(()=>{
        darkMode && document.documentElement.classList.add('dark');

        if (darkMode){
            localStorage.setItem('darkMode',JSON.stringify(darkMode))
        }
        else {localStorage.setItem('darkMode',JSON.stringify(darkMode))}
    },[darkMode])
    return (
        <DarkModeContext.Provider value={{darkMode,handleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = ()=> useContext(DarkModeContext);
const updateDarkMode = (darkMode) =>{
    if (darkMode){
        document.documentElement.classList.add('dark');
    }
    else {
        document.documentElement.classList.remove('dark');
    }
}

function readDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    return JSON.parse(darkMode)
}