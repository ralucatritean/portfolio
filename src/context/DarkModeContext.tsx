import { createContext } from "react";

interface DarkModeContext {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

const debugSetIsDark = (value: boolean) => {
    console.log('Dark mode state changed to:', value);
};

export const DarkModeContext = createContext<DarkModeContext>({
    isDark: false,
    setIsDark: debugSetIsDark,
});
