import React from 'react';
import { CameraFill } from 'react-bootstrap-icons';
import Gale1 from '../../assets/gale1.jpg';
import Gale2 from '../../assets/gale2.jpg';
import Gale3 from '../../assets/gale3.jpg';
import Gale4 from '../../assets/gale4.jpg';
import Gale5 from '../../assets/gale5.jpg';
import Gale6 from '../../assets/gale6.jpg';
import Gale7 from '../../assets/gale7.jpg';
import Gale8 from '../../assets/gale8.jpg';
import Gale9 from '../../assets/gale9.jpg';
import '../../styles/Gallery.css'
const Gallery = () => {
    
    return ( 
        <>
        <div className='row px-5 m-5 d-flex align-items-center justify-content-evenly'>
        <div className='col'><hr /></div>
   
        <div className="col text-center"><CameraFill className='fs-1'/></div>
        <div className="col"><hr /></div>
    </div>
        <div className="row m-5 g-5 d-flex justify-content-center align-items-center">
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale1} alt="Food gallery 1" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale4} alt="Food gallery 2" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale7} alt="Food gallery 2" />
            </div>
        </div>
        <div className="row mb-5 g-5 d-flex justify-content-center align-items-center">
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale3} alt="Food gallery 1" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale2} alt="Food gallery 2" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale5} alt="Food gallery 2" />
            </div>
        </div>
        <div className="row mb-5 g-5 d-flex justify-content-center align-items-center">
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale6} alt="Food gallery 1" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale8} alt="Food gallery 2" />
            </div>
            <div className="col-auto">
                <img className='img-fluid img-gale' src={Gale9} alt="Food gallery 2" />
            </div>
        </div>
        </>
     );
}
 
export default Gallery;