const Bookresolvers ={
    BookQuery:{
        books:()=>books,
        book:(_,{title})=>{
            console.log(title);
            for (let i =0; i<books.length;i++){
                if(books[i].title==title)
                return books[i];
            }
        },
        addBook:(_,{title,author})=>{
            let book={};
            book["title"]=title;
            book["author"]=author;
            
            books.push(book);

            for (let i =0; i<books.length;i++){
               if(books[i].title==title)
               return books[i];
           }
        }
           
        
   }
}

module.exports=Bookresolvers;