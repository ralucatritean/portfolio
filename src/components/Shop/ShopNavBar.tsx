import { Link } from 'react-router-dom';
import "../../css/Shop.css";
import { Button } from 'react-bootstrap';
import Cart from '../../assets/images/cart.png'
function ShopNavBar() {
    const shopItem = 3
    return (
        <div className='navbar-content'>
            <ul className="menu">
                <li>
                    <Link
                        to="/shop"
                        className={location.pathname === '/store' ? 'active' : ''}
                    >
                        Store
                    </Link>
                </li>
                <li>
                    <Link
                        to="/shop/cart"
                        className={location.pathname === '/store/cart' ? 'active' : ''}
                    >
                        Cart
                    </Link>
                </li>
            </ul>
            <Button className='card-btn'>
                <img className='card-img'
                    src={Cart}
                    alt="Button icon"
                />
                {shopItem > 0 && (
                    <div className="item-count">
                        {shopItem}
                    </div>
                )}
            </Button >
        </div >
    );
}

export default ShopNavBar;