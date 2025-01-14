import { createContext } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const debugSetIsOpen = (value: boolean) => {
  console.log('Sidebar state changed to:', value);
};

const debugSetIsDark = (value: boolean) => {
  console.log('Dark mode state changed to:', value);
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: debugSetIsOpen,
  isDark: false,
  setIsDark: debugSetIsDark,
});