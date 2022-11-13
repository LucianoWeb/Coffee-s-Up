import React from 'react';
import { Star } from 'react-bootstrap-icons';
import '../styles/About.css'


const Opinions = () => {
    
    return (
        <>
        <h4 className='opi text-white'>~ What people say about Coffee's UP ~</h4>
        <div className="row my-5 opinions  d-flex justify-content-center align-items-center">
            <Card name="Sophie" text="~ Whenever I go to the Coffee's up, it never disappoints. The super friendly staff and the incredible variety of delicious and fresh cakes... It's the perfect place! ~"/>
            <Card name="Martin" text="~ I just wanted to have a fast coffee before starting a long work day and it was perfect, as they say, fast and good service. Totally recommended. ~"/>
            <Card name="Lauren" text="~ I was there yesterday morning with my family and we loved this place. There's plenty of room inside and the terrace is super quiet and spacious. ~"/>
            


            
        </div>
        </>
    );
}
const Card = ({name, text}) => {
    return ( 
        <div className="col-12 col-lg-3 mt-3 ">
                <div className="card bg-dark p-2">
                    <div className="card-body text-center">
                        <div className='mb-3 d-flex gap-2 justify-content-center'>
                        <Star className='text-warning'/>
                        <Star className='text-warning'/>
                        <Star className='text-warning'/>
                        <Star className='text-warning'/>
                        </div>
                    
                        <h4 className='card-title fw-bold mb-3 fs-3 text-warning'>{name}</h4>
                        <p className='card-text fs-5 text-white'>{text}</p> 
                    </div>
                </div>
            </div>
     );
}
 
export default Opinions;