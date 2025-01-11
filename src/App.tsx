import './css/index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Movie/Home'
import Favorite from './components/Movie/Favotite'
import { MovieProvider } from './context/MovieContext'
function App() {
  return (
    <MovieProvider>
      <main className="main-content">
        <Routes>
          <Route path="/movie" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>

  )
}

export default App
