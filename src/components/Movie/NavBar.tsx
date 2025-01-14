import '/src/css/Movie.css';
import { Link } from 'react-router-dom';
import '../../css/App.css'

function NavBar() {
    return <div className='navbar-content' >
        <ul className="breadcrumb">
            <li>
                <Link
                    to="/movie"
                    className={location.pathname === '/movie' ? 'active' : ''}
                >
                    Home
                </Link>
            </li>
            <li><span> {'>'} </span></li>
            <li>
                <Link
                    to="/movie/favorites"
                    className={location.pathname === '/movie/favorites' ? 'active' : ''}
                >
                    Favorite
                </Link>
            </li>
        </ul>
    </div>
}
export default NavBar;