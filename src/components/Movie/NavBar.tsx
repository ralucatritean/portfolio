import '/src/css/Movie.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return <div>
        <div className="container">
            <ul className="breadcrumb">
                <li><Link to="/movie"  className="active">Home</Link></li>    
                <li><span> {' > '} </span></li>
                <li><Link to="/favorites"  className="active">Favorite</Link></li>   
            </ul>
        </div>
    </div>
}
export default NavBar;