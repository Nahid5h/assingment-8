const getStoredWish= ()=>{
    const storedBook= localStorage.getItem('store-wish')
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return  [];
}



const saveWish = bookId =>{
    const storedBook= getStoredWish();
    const exists= storedBook.find(bookid=>bookid ===bookId);
    if(!exists){
        storedBook.push(bookId);
        localStorage.setItem('store-wish',JSON.stringify(storedBook))
    }

}

const removeBookFromWishlist = (id) => {
    let storedWishlist = getStoredWish();  
    storedWishlist = storedWishlist.filter(bookId => bookId !== id);  
  
    localStorage.setItem("store-Wish", JSON.stringify(storedWishlist));  
  };

export { getStoredWish,saveWish,removeBookFromWishlist}