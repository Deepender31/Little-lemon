import img from './icons_assets/restauranfood.jpg';
import './main.css';
import Special from './specials';
import { Link } from 'react-router-dom';
function Main() {
    return(
        <>
         <main>
            <div className="Hero">
                <div className="Hero_Text">
                    <h1 className="Hero_Text_Title">
                        Little Lemon
                    </h1>
                    <h4>
                        Chicago
                    </h4>
                    <p className="Hero_Text_P">We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button onClick={() =>{<Link to='./Reservation'></Link>}}>
                        Reserve a Table
                    </button>
                </div>
                <div className="Hero_img">
                    <img src={img} height="200" width="200" alt='Restaurant Food'></img>
                </div>
            </div>
        
         </main>
         <Special/>
         </>
    );
}
export default Main;