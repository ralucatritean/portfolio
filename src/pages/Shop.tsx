import { useContext } from "react";
import { SidebarContext } from "../context/SlidebarContext";
import { Outlet } from "react-router-dom";
import ShopNavBar from "../components/Shop/ShopNavBar";
import '../css/Shop.css'

function Shop() {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className="container">
            <div className={`contentPage lightordark ${isOpen ? 'openContainer' : 'closeContainer'}`}>
                <div className="content">
                    <Outlet />
                </div>
            </div></div>
    );
}

export default Shop;