import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/App.css'; 

function Settings() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="container mt-4">
            <h2>Settings</h2>
            <button className="btn btn-secondary" onClick={toggleTheme}>
                Toggle Theme Mode (Current: {theme})
            </button>
        </div>
    );
}

export default Settings;
