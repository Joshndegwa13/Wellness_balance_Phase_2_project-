import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();     // context to share the theme data across components

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');      // State to manage the current theme default being 'dark'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));    // Function to switch between dark and light themes
    };

    useEffect(() => {
        document.body.className = theme;   // Effect to update the body class anytime the theme changes
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
