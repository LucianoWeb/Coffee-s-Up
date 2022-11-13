import React from 'react';
import { CupHotFill } from 'react-bootstrap-icons';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';



const Header = () => {


    return (
            <div className="row mb-5">
                <header className="bg-dark p-2 fixed-top">
                    <div className='col-auto d-flex-column d-md-flex justify-content-around align-items-center'>
                        <div >
                            <NavLink to="/" className='d-flex gap-3 m-2 m-md-0 justify-content-center align-items-center'>
                            <H1 className='text-white'> Coffee's <Span>U</Span>P</H1>
                            <CupHotFill className='fs-2 text-white' />
                            </NavLink>
                            
                        </div>
                        <nav className='gap-4 d-flex justify-content-center align-items-center'>
                            
                            <NavLink to="/menu" className="px-3 btn-outline-warning  text-white fs-5  btn">Menu</NavLink>
                            <NavLink to="/about-us" className="px-3 btn-outline-warning text-white fs-5     btn">About us</NavLink>
                        </nav>
                    </div>
                </header>
            </div>
     
        

    );
}
const H1 = styled.h1`
font-family: "Berkshire Swash";
font-size: 2.5rem;
`
const Span = styled.span`
color: rgb(162, 92, 0);
`
export default Header;