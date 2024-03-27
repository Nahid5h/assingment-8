const getStoredBook= ()=>{
    const storedBook= localStorage.getItem('store-book')
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return  [];
}



const saveBook = bookId =>{
    const storedBook= getStoredBook();
    const exists= storedBook.find(bookid=>bookid ===bookId);
    if(!exists){
        storedBook.push(bookId);
        localStorage.setItem('store-book',JSON.stringify(storedBook))
    }

}

export { getStoredBook,saveBook}

