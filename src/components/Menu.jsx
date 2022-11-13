import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu1 from '../assets/menu1.png';
import Menu2 from '../assets/menu2.png';
import Menu3 from '../assets/menu3.png';
import Menu4 from '../assets/menu4.png';
import '../styles/Menu.css';


const Menu = () => {
    const location1 = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location1]);
    return (
        <div className='border-menu bg-dark'>
            <div className="row menu  text-white">
                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className=' d-flex flex-column align-items-center'>
                        <img className='img-menu img-fluid' src={Menu1} alt="Croissant image" />
                        <h4 className='h4-menu'>Croissants</h4>
                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Croissant with ham and cheese</li>
                                <p className='fs-5 m-0 text-warning ps-3 text-warning'>3.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Croissant with pork and cheese</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Croissant with bacon and salad</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.30$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Croissant with ham, egg and camramelized onion</li>
                                <p className='fs-5 m-0 text-warning ps-3'>5.10$</p>
                            </div>
                        </ul>
                        <h4 className='h4-menu'>Extras</h4>
                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-evenly align-items-center'>
                                <li className='fs-5'>Bacon</li>
                                <p className='fs-5 m-0 text-warning ps-3'>1$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-evenly align-items-center'>
                                <li className='fs-5'>Cheese</li>
                                <p className='fs-5 m-0 text-warning ps-3'>1$</p>
                            </div>
                            <div className='d-flex py-2 gap-3 align-items-center'>
                                <li className='fs-5'>Spicy sauce</li>
                                <p className='fs-5 m-0 text-warning ps-3'>1$</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className=' d-flex flex-column align-items-center'>
                        <div className="d-flex gap-4">
                            <img className='img-menu2 img-fluid ' src={Menu2} alt="Croissant image" />
                            <h4 className='h4-menu'>Coffees</h4>
                        </div>

                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Normal</li>
                                <p className='fs-5 m-0 text-warning ps-3'>1.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Special</li>
                                <p className='fs-5 m-0 text-warning ps-3'>2.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between gap-5 align-items-center'>
                                <li className='fs-5'>Special with cream</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.00$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Colombian</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.10$</p>
                            </div>
                        </ul>
                        <img className='img-menu3' src={Menu3} alt="Coffee" />

                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-evenly align-items-center'>
                                <li className='fs-5'>Arabic</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.30$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-evenly align-items-center'>
                                <li className='fs-5'>African</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.35$</p>
                            </div>
                            <div className='d-flex py-2 gap-3 align-items-center'>
                                <li className='fs-5'>Spanish</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.15$</p>
                            </div>
                            <div className='d-flex py-2 gap-3 align-items-center'>
                                <li className='fs-5'>American</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.25$</p>
                            </div>
                        </ul>
                        <p className='text-center'>*Dont hesitate to ask us about a specific coffee, we have more than 50 varieties</p>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
                    <div className=' d-flex flex-column align-items-center'>
                        <img className='img-menu4 img-fluid ' src={Menu4} alt="Croissant image" />
                        <h4 className='h4-menu'>Sandwiches</h4>
                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Sandwich with ham and cheese</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Sandwich with ham, egg, cheese and mustard</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Sandwich with bacon and salad</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.30$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Sandwich with chicken, egg and salad</li>
                                <p className='fs-5 m-0 text-warning ps-3'>5.10$</p>
                            </div>
                        </ul>
                        <h4 className='h4-menu'>Cakes and fruits</h4>
                        <ul className='ul-menu m-2'>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Three chocolates cake</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.50$</p>
                            </div>
                            <div className='d-flex py-2 gap-4 align-items-center'>
                                <li className='fs-5'>Strawberry and cream cake</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.50$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Sacher cake</li>
                                <p className='fs-5 m-0 text-warning ps-3'>4.90$</p>
                            </div>
                            <div className='d-flex py-2 justify-content-between align-items-center'>
                                <li className='fs-5'>Fruit salad</li>
                                <p className='fs-5 m-0 text-warning ps-3'>3.90$</p>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Menu;