import React from 'react';
import { CupHotFill } from 'react-bootstrap-icons';
import Serving from '../../assets/Serving.mp4';
import '../../styles/MainHome.css';


const MainHome = () => {
    
    return (
        <>
            <div className="row">
                <video className='video-main' src={Serving} autoplay="true" muted="true" loop="true"></video>

                <div className='d-flex justify-content-center mb-5'>
                    <h3 className="slogan"> The perfect place to have a breakfast </h3>
                    <a href='#down' className='btn btn-warning button-main'>Discover more</a>
                    
                </div>

            </div>

            <h3 id='down' className='text-center slogan2'>~ Discover more about us, visit us and recommend it! ~</h3>

            <div className='row px-5 m-5 d-flex align-items-center justify-content-evenly'>
                <div className='col'><hr /></div>

                <div className="col text-center"><CupHotFill className='fs-1' /></div>
                <div className="col"><hr /></div>
            </div>



        </>
    );
}

export default MainHome;