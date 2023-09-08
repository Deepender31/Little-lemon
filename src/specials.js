import './specials.css';
import img from "./icons_assets/bruchetta.svg";
import GreenSalad from "./icons_assets/greek salad.jpg";
import LemonDessert from "./icons_assets/lemon dessert.jpg";
function Special() {
    return (
    <div className='special_main'>
        <div className='Div_heading'>
            <h1 className="Heading_special">
                This weeks specials!
            </h1>
            <button className="Button_online">Online Menu</button>
        </div>
        <div className='Menu'>
            <div className='item'>
                <img src={GreenSalad} alt='Green Salad'></img>
                <div className='item_name_price'>
                    <h3 className='item_name'>Green Salad</h3>
                    <h3 className='item_price'>$12.90</h3>
                </div>
                <p className='item_discriptive'>The famous green salad of crispy letuce peppers alives and out Chicago style
                feta cheese gamished with crunchy grlic and rosemary croutons.</p>
                <h5>Order delivery</h5>
            </div>
            <div className='item'>
                <img src={img} alt='Bruchetta'></img>
                <div className='item_name_price'>
                    <h3 className='item_name'>Bruchetta</h3>
                    <h3 className='item_price'>$5.93</h3>
                </div>
                <p className='item_discriptive'>Our Bruchetta is made from grilled bread that has been smea red with garlic and seasoned with salt and olive oil.</p>
                <h5>Order delivery</h5>
            </div>
            <div className='item'>
                <img src={LemonDessert} alt='Lemon Dessert'></img>
                <div className='item_name_price'>
                    <h3 className='item_name'>Lemon Dessert</h3>
                    <h3 className='item_price'>$5.00</h3>
                </div>
                <p className='item_discriptive'>This comes straight from grandma's recipe book, every last ingredient has been sourced is as authentic as can be imagine.</p>
                <h5>Order delivery</h5>
            </div>

        </div>
    </div>
         );
}

export default Special;