import './Header.css'
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <nav className="header">
           <img src={logo} alt="" />
           <div>
           <a href="/shop">shop</a>
           <a href="/order">orders</a>
           <a href="/inventory">Inventory</a>
           <a href="/login">login</a>
            
           </div>
        </nav>
    );
};

export default Header;