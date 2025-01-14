import NavBar from "../components/Movie/NavBar";
import { Routes, Route } from 'react-router-dom'
import Home from "../components/Movie/Home";
import Favorite from "../components/Movie/Favotite";
import { MovieProvider } from "../context/MovieContext";
import Sidebar from "../components/Slidebare/Slidebare";
import { SidebarContext } from "../context/SlidebarContext";
import { useContext, useEffect } from "react";

function Movie() {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    
    return <div>
        <div className="container">
            <Sidebar>
                <div></div>
            </Sidebar>
            <div className={`contentPage ${isOpen ? 'openContainer' : 'closeContainer'}`}>
                <MovieProvider>
                    <div className="content">
                        <Routes>
                            <Route path="/Movie" element={<Home />} />
                            <Route path="/favorites" element={<Favorite />} />
                        </Routes>
                    </div>
                </MovieProvider>
            </div>
        </div>
    </div>
}
export default Movie;