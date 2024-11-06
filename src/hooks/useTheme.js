import { useState, useEffect } from 'react';

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
        document.body.className = isDarkMode ? 'dark-mode' : '';
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

    return { isDarkMode, toggleTheme };
};

export default useTheme;
