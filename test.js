const merge = require('./MergeGraph');

const resolvers ={
    Query:{
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

const CommentResolvers={
    Query:{
        PostComment:(_,{id,message,author})=>{
            let comment ={};
            comment['id']=id;
            comment['message']=message;
            comment['author']=author;
            Comments.push(comment);
            for(let i=0;i<Comments.length;i++){
                if(Comments[i].id==id)
                return Comment[i];
            }
        }
    }
}
let merge =CommentResolvers.merge(resolvers);
let re =merge.mergeResolver(resolvers)
console.log(merge);
console.log(Object.keys(resolvers.Query));