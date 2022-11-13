import React from 'react';
import styled from 'styled-components';
import '../../styles/Where.css'


const Where = () => {
    return (
        <div className='container-where'>
            <h3 className='text-center slogan3'>~ We are here ~</h3>
            <div className="row g-0  d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-4">
                    <h4 >Address: </h4>
                    <p className='text-white fs-5'> 214 6th St Seal Beach, CA 90740 EE. UU.</p>
                    <h4 >Opening hours: </h4>
                    <p className='text-white fs-5'>Monday - Saturday:</p>
                    <p className='text-white fs-5'>7:00 - 13:00</p>
                    <p className='text-white fs-5'>Sunday: <Closed>closed</Closed></p>
                </div>
                <div className='col-12 col-md-4'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.4193417291442!2d-118.10748897079783!3d33.74315801397015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2fe350c8842d%3A0x49b61f3ab19cb257!2s214%206th%20St%2C%20Seal%20Beach%2C%20CA%2090740%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1664880899391!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    );
}
const Closed = styled.span`
text-decoration: line-through;
color: #ffc107;
`

export default Where;