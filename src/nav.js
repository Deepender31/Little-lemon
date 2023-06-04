import './nav.css';
function Nav() {
    return(
        <nav className="Nav">
            <ul className="menu">
                <a href="./index.html"><li>Home</li></a>
                <a href="./index.html"><li>About</li></a>
                <a href="./index.html"><li>Menu</li></a>
                <a href="./index.html"><li>Reservations</li></a>
                <a href="./index.html"><li>Order Online</li></a>
                <a href="./index.html"><li>Login</li></a>
            </ul>
        </nav>
    );

}
export default Nav;