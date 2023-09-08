import { Link } from 'react-router-dom';
import './nav.css';
function Nav() {
    return(
        <nav className="Nav">
            <ul className="menu">
                <Link to="./"><li>Home</li></Link>
                <Link to="./"><li>About</li></Link>
                <Link to="./"><li>Menu</li></Link>
                <Link to="./Reservation"><li>Reservations</li></Link>
                <Link to="./"><li>Order Online</li></Link>
                <Link to="./"><li>Login</li></Link>
            </ul>
        </nav>
    );

}
export default Nav;