import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName,image,author,category,rating ,tags,bookId} = book;
 
    return (
        <Link to={`/book/${bookId}`}>
              <div>
            <div className="card h-[700px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='border py-6 px-12 rounded-2xl bg-[#F3F3F3]'  src={image}  />
                </figure>
                <div className="card-body ">
                    <div className='flex justify-between my-3'>
                        
                        <button className='btn rounded-full text-[#23BE0A] text-2xl'><h2>{tags[0]}</h2></button>
                        <button className='btn rounded-full text-[#23BE0A] text-2xl'><h2>{tags[1]}</h2></button>
                    </div>
                    <h2 className="card-title text-3xl ">{bookName}</h2>
                    <p className='text-2xl py-3'> By: {author}</p>
                   <hr />
                   <div className='flex justify-between'>
                    <h1 className='text-2xl'>{category}</h1>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='text-2xl'>{rating}</p>
                        <IoIosStarOutline className='h-[24px] w-[24px]'></IoIosStarOutline>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        </Link>
      
    );
};

export default Book;