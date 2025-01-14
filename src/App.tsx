import './css/index.css'
import Movie from './pages/Movie'
import { useState } from 'react'
import { SidebarContext } from './context/SlidebarContext';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <Movie/>
    </SidebarContext.Provider>
  )
}

export default App