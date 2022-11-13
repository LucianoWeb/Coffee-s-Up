import React, { useEffect } from 'react';
import '../styles/About.css';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Opinions from './Oponions';
import { useLocation } from 'react-router-dom';


const About = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
        <div className="row mt-5 about">
            <div className="col about-car">
                <h4 className='text-center text-white p-3'>Since Coffee's UP opened in 2018, we have always kept a simple, yet powerful idea in our mindset: working as a team.
                <br /> <br />
                Nowadays, time is very important for people and we know it. That’s why we are always trying to improve and provide the best coffee experience to our clients. Visit us to enjoy the perfect cup of coffee and spend a lovely morning in our wonderful local atmosphere, either working or reading your favourite novel. The possibilities are endless. </h4>
                <div className="carousel slide" id="mi-carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className=" carousel-item active" data-bs-interval="5000">

                            <img className='img-fluid img-car' src={about3} alt="imagen1" />
                        </div>
                        <div className="carousel-item"
                            data-bs-interval="5000">

                            <img className='img-fluid img-car' src={about1} alt="imagen2" />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">

                            <img className='img-fluid img-car' src={about2} alt="imagen3" />
                        </div>
                    </div>

                    <ArrowLeftCircleFill
                        className="carousel-control-prev fs-2 m-auto"
                        type='button'
                        data-bs-target="#mi-carousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"
                        ></span>

                        <span className='visually-hidden'>Previous</span>
                    </ArrowLeftCircleFill>
                    <ArrowRightCircleFill
                        className="carousel-control-next fs-2 m-auto"
                        type='button'
                        data-bs-target="#mi-carousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"
                        >

                            <span className='visually-hidden'>Next</span>
                        </span>
                    </ArrowRightCircleFill>

                    <div className="carousel-indicators">
                        <button
                            className='active'
                            type='button'
                            data-bs-target="#mi-carousel"
                            data-bs-slide-to="0"
                            aria-label="Slide 1" >
                        </button>
                        <button
                            className=''
                            type='button'
                            data-bs-target="#mi-carousel"
                            data-bs-slide-to="1"
                            aria-label="Slide 2" >
                        </button>
                        <button
                            className=''
                            type='button'
                            data-bs-target="#mi-carousel"
                            data-bs-slide-to="2"
                            aria-label="Slide 3" >
                        </button>
                    </div>
                </div>
            </div>
            <Opinions/>
        </div>
        
        </>
    );
}

export default About;