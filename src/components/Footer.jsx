import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`footer ${theme}`}>
            <p>&copy; 2024 Wellness Balance. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
