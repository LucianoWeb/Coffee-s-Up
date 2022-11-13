import React from 'react';
import { NavLink } from 'react-router-dom';
import D1 from '../../assets/card1.jpg';
import D2 from '../../assets/card6.jpg';
import D3 from '../../assets/card5.jpg';
import '../../styles/Discover.css';

const Discover = () => {
    return ( 
        <div className="row d-flex justify-content-evenly align-items-center disco-fondo py-5 ">
            <div className="col-12 col-md-3 d-flex align-items-center flex-column text-center text-white">
                <h3>Homemade</h3>
                <p className='card-text  py-3 fs-5'>All the food that we prepare in Coffee's UP is made with our own hands. We choose the best ingredients to make every single product, from the simplest chocolate muffin to our special Kraken Coffee Shake. <br />Goodbye additives!</p>
                <img src={D1} className="img-dis" alt="Homemade food" />
                <NavLink to="/menu" className="btn my-4 btn-warning fs-5  fw text-dark">See Menu</NavLink>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center flex-column text-center text-white">
                <h3> Quality Service</h3>
                <p className='card-text py-3 fs-5'>We care about our clients’ time. That’s why we start to prepare everything in the early morning and thus provide a top-notch service. <br />
                Just sit, relax and enjoy!</p>
                <img src={D2} className="img-dis" alt="Time clock" />
                <NavLink to="/about-us" className="btn my-4 btn-warning fs-5  fw text-dark">About us</NavLink>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center flex-column text-center text-white">
                <h3>Coffee's Experts</h3>
                <p className='card-text py-3 fs-5'>We offer more than fifty varieties of coffee in our local. Sit down and be ready to take off, and don’t worry about flight tickets anymore. We will give you Coffee’s UP wings and your mind will teleport overseas. <br />Fasten your seat belt!</p>
                <img src={D3} className="img-dis" alt="Coffee" />
                <a target="blank" href='https://varieties.worldcoffeeresearch.org/' className="btn my-4 btn-warning fs-5  fw text-dark">Learn more</a>
            </div>
        </div>
     );
}
 
export default Discover;