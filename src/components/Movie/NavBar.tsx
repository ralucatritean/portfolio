import '/src/css/Movie.css';
import { Link } from 'react-router-dom';
import '../../css/App.css'

function NavBar() {
    return <div className='navbar-content' >
            <ul className="breadcrumb">
                <li><Link to="/movie"  className="active">Home</Link></li>    
                <li><span> {' > '} </span></li>
                <li><Link to="/favorites"  className="active">Favorite</Link></li>   
            </ul>
    </div>
}
export default NavBar;