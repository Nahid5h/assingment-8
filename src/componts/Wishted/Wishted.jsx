import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getStoredWish } from '../../Utility/local';


const Wishted = () => {
    const books = useLoaderData();
    const [appliedBooks, setAppliedBooks] = useState([])
    useEffect(() => {
        const storedBookIds = getStoredWish();
        if (books.length > 0) {
            // const readBooks=books.filter(book=> storedBookIds.includes(book.bookIdItn))
            const bookAplied = [];
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId);
                if (book) {
                    bookAplied.push(book)
                }
            }
            setAppliedBooks(bookAplied)
            // console.log(bookAplied)


        }
    }, [])
    return (
        
        <div>
          {
             appliedBooks.map(book => <div book={book}>
                
                <div className="hero rounded-2xl flex  border  bg-white">
                        <div className="hero-content gap-7 flex-col lg:flex-row">
                          <div>
                          <img className='py-7 px-16 border rounded-3xl bg-[#F3F3F3]' src={book.image} />
                          </div>
                            <div>
                                <h1 className="text-5xl my-4 font-bold">{book.bookName}</h1>
                                <p className='text-lg'> By {book.author}</p>
                                <div class="flex text-center gap-6 my-8 text-2xl  ">
                                    <h1>Tags</h1>
       
                                    <button class="btn rounded-full text-[#23BE0A] text-2xl">{book.tags[0]}</button>
                                    <button class="btn rounded-full text-[#23BE0A] text-2xl">{book.tags[1]}</button>
                                    <p>Year of the Publish: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className='flex  mb-6 gap-10 text-xl'>
      
        
                                        <h1>Publisher: {book.publisher} </h1>
                                        <h1>Pages  {book.totalPages}</h1>
                                    </div>
                                    <hr />
                                  <div className='flex mt-6 gap-7'>
                                  <button class="btn rounded-full text-[#328EFF] text-xl"> Category: {book.category}</button>
                                  <button class="btn rounded-full text-[#FFAC33] text-xl">Rating: {book.rating}</button>
                                  <button class="btn rounded-full text-white bg-[#23BE0A] text-xl">View Details</button>
                                  </div>
                              
                            </div>
                        </div>
                    </div>

             </div>)
          }
        </div>
    );
};

export default Wishted;