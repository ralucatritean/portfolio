import NavBar from "./NavBar";
import '/src/css/Movie.css';
import { useMovieContext, MovieProps } from "../../context/MovieContext";
import MovieCard from "./MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return < div className="movies-grid">
            <NavBar />
            <div>
                {favorites.map((movieId) => {
                    const movie: MovieProps = {
                        id: movieId,
                        title: '',    // trebuie să obții aceste date de undeva
                        url: '',      // fie din context
                        release_date: '', // fie dintr-un API
                        poster_path: ''   // fie din alt loc
                    };
                    return <MovieCard movie={movie} key={movieId} />;
                })}
            </div>
        </div>
    }
    else return <div className="favorites-empty">
        <NavBar />

        <h2>Nici un film adaugat la favorite</h2>
        <p>Incepe sa aduagi filme la favorite si vor aparea aici</p>

    </div>
}
export default Favorite;