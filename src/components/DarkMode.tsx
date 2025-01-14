import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext.tsx'

interface DarkModeProps {
  onToggle?: (isDark: boolean) => void;
}

function DarkMode({ onToggle }: DarkModeProps) {
  const { isDark, setIsDark } = useContext(DarkModeContext);

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