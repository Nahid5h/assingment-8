import React from 'react';
import png from '../../assets/pngwing 1.svg'
const Banner = () => {
    return (
        <div>
            <div className="hero   h-[554px] rounded-3xl  bg-base-200">
                <div className="hero-content gap-20  flex-col lg:flex-row-reverse">
                 
                   <img src={png} />
                  
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> <br /> your bookshelf</h1>
                        
                        <button className="btn btn-primary px-14 bg-[#23BE0A] mt-12">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;