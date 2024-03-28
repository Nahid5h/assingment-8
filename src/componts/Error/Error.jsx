import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
    
           <div className='mt-5'>
           <h1 className='text-6xl font-semibold text-yellow-300 mb-8 '>opps!!</h1>
      
         <Link to='/'><button className='btn text-2xl bg-lime-400'>Go back</button></Link>
    
           </div>
        
    );
};

export default Error;