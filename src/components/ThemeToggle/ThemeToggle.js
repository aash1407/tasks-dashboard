import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`} /* Apply class based on theme */
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? <FaSun size={50} /> : <FaMoon size={50} />}
        </button>
    );
};

export default ThemeToggle;
