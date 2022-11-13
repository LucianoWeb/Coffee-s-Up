import React from 'react'
import styled from 'styled-components';

const Error404 = () => {
    return ( 
        <Error className=' fs-3 d-flex flex-column  align-items-center text-center'>
            <h3 className='fs-1 fw-bold'>Error 404</h3>
            <p>The page what you was looking for does not exist.</p>
        </Error>
     );
}
const Error = styled.div`
max-height: 60vh;
margin: 11.5rem 2rem;
`
export default Error404;