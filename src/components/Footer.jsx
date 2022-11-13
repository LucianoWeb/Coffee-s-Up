import React from 'react';
import { EnvelopeFill, Facebook, Instagram, TelephoneFill, Twitter, Whatsapp } from 'react-bootstrap-icons';
import styled from 'styled-components';

const Footer = () => {
 
    return ( 
        <div className="row py-3 g-0 bg-dark d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-5 align-items-center d-flex flex-column">
                <h4 className='text-warning fw-bold p-3'>Contact Us</h4>
                <p className='text-white fs-5'>Telf : 499 2020 1929 <TelephoneFill className='ms-3'/> </p>
                <p className='text-white fs-5'>Whatsapp : +49 611 7212 400 <Whatsapp className='ms-3'/></p>
                <p className='text-white fs-5'>Email: coffesup@gmfail.com <EnvelopeFill className='ms-3'/></p>
            </div>
            <div className="col-12 col-md-5 align-items-center d-flex flex-column">
                <h4 className='text-warning fw-bold p-2'>Our Social Media</h4>
                <Media className='fs-5 p-2' target="blank" href="https://www.instagram.com/">Instagram <Instagram className='ms-3'/></Media>
                <Media className='fs-5 p-2' target="blank" href="https://www.facebook.com/">Facebook <Facebook className='ms-3'/></Media>
                <Media className='fs-5 p-2' target="blank" href="https://www.twitter.com/">Twitter <Twitter className='ms-3'/></Media>
            </div>
            
        </div>
     );
}
const Media = styled.a`
:hover{
    color: #ffc107;
    transition: .3s;
}
`
export default Footer;