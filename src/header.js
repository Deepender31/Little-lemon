import Nav from "./nav";
import img from "./icons_assets/Logo.svg";
import './header.css';
function Header (){
     return(
        <header className="header">
            <img src={img} alt="Logo"></img>
            <Nav/>
        </header>
     );
}
export default Header;