// import React, { useEffect, useState } from 'react';
// import { NavLink,  useLoaderData } from 'react-router-dom';
// import { getStoredBook } from '../../Utility/localstarage';
// import ReadBooks from '../ReadBooks/ReadBooks';
// import Wishted from '../Wishted/Wishted';

import { Link, Outlet } from "react-router-dom";
// import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {
    // const books =useLoaderData();
    // const [appliedBooks,setAppliedBooks] =useState([])
    // useEffect(()=>{
    //     const storedBookIds= getStoredBook();
    //     if(books.length>0){
    //         // const readBooks=books.filter(book=> storedBookIds.includes(book.bookIdItn))
    //         const bookAplied =[];
    //         for(const bookId of storedBookIds){
    //             const book = books.find(book =>book.bookId===bookId);
    //             if(book){
    //                 bookAplied.push(book)
    //             }
    //         }
    //         setAppliedBooks(bookAplied)
    //         // console.log(bookAplied)


    //     }
    // },[])
    return (
        <div>

            <h1 className="text-3xl bg-[#F3F3F3] text-center border py-7 w-full rounded-3xl mt-5">books</h1>
            <div role="tablist" className="tabs tabs-lifted tabs-lg my-8">
                <a role="tab" className="tab"><Link>Read Books</Link></a>
               
                <a role="tab" className="tab tab-active"><Link to={'wish'}>Wishlist Books</Link></a>
               
                <a role="tab" className="tab"></a>
            </div>

            
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;