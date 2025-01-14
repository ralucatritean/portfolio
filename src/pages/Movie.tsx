import NavBar from "../components/Movie/NavBar";
import { Routes, Route } from 'react-router-dom'
import Home from "../components/Movie/Home";
import Favorite from "../components/Movie/Favotite";
import { MovieProvider } from "../context/MovieContext";
import Sidebar from "../components/Slidebare/Slidebare";

function Movie() {
    return <div>
        <Sidebar/>
        <MovieProvider>
            <div className="contentPage">
                <Routes>
                    <Route path="/Movie" element={<Home />} />
                    <Route path="/favorites" element={<Favorite />} />
                </Routes>
            </div>
        </MovieProvider>
    </div>
}
export default Movie;