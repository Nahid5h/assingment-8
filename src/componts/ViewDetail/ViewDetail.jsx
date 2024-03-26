import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetail = () => {
    const books =useLoaderData();
    const {bookId}=useParams();
    const bookIdInt= parseInt(bookId)
    const book = books.find( book=> book.bookId === bookIdInt)
    console.log(book)
    

    
    return (
        <div className='mt-20 flex  gap-11 '>
           <div className='flex-1  flex items-center py-10 rounded-2xl justify-center bg-[#F3F3F3] '>
       <img className='  h-[711px] rounded-2xl  ' src={book.image} alt="" />
           </div>
           <div className='flex-1 '>
            <h1 className='text-5xl font-semibold'>{book.bookName}</h1>
            <p className='my-8 text-2xl'> By: {book.author}</p>
            <hr />
            <p className='my-8 text-2xl'>{book.category}</p>
            <hr />
            <p className='my-8 text-2xl'>Review :{book.review}</p>
            <div className='flex gap-6 my-8 text-2xl  '>
                <h1>Tags</h1>
                <button  className='btn rounded-full text-[#23BE0A] text-2xl' >{book.tags[0]}</button>
                <button  className='btn rounded-full text-[#23BE0A] text-2xl' >{book.tags[1]}</button>
            </div>
            <hr />
         <div className='my-8 text-2xl space-y-4'>
         <p>Number of pages : <span className='font-bold ml-28'>{book.totalPages}</span></p>
            <p>Publisher : <span className='font-bold ml-48'>{book.publisher}</span></p>
            <p>Year of the Publish: <span className='font-bold ml-28'>{book.yearOfPublishing}</span></p>
            <p>Rating: <span className='font-bold ml-60'>{book.rating}</span></p>
            
         </div>
         <div className=' flex gap-5 mt-20'>
            <button className='btn border text-2xl font-semibold  h-16 w-32 bg-[#FFFFFF]'>Read</button>
            <button className='btn border text-2xl text-white font-semibold h-16 w-36 bg-[#50B1C9]'>Wishlist</button>
        
         </div>

        
            
           </div>
        </div>
    );
};

export default ViewDetail;