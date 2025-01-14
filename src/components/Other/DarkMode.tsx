import "../../css/DarkMode.css"
import { useContext, useState } from 'react'
import { SidebarContext } from "../../context/SidebarContext";
interface DarkModeProps {
    onToggle?: (isDark: boolean) => void;
}

function DarkMode({ onToggle }: DarkModeProps) {
    const { isDark, setIsDark } = useContext(SidebarContext);

    const handleToggle = () => {
        const newState = !isDark;
        setIsDark(newState);
        onToggle?.(newState);
    };

    return (
        <div className="dark-mode-container">
            <label className="switch">
                <input 
                    type="checkbox"
                    checked={isDark}
                    onChange={handleToggle}
                />
                <span className="slider round">
                    <div className="icons">
                        <p >☀️</p>
                        <span>🌙</span>
                    </div>
                </span>
            </label>
        </div>
    );
}

export default DarkMode;