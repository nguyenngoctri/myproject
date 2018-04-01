
const books =[
    {
        title:"Harry Potter and the Sorcerer's stone",
        author:"J.k Rowling"
    },
    {
        title:"Jurassic Park",
        author:'Michael Crichton'
    }
];
const Axios = require('axios');
 const Booktype =`
    type Book {
        title:String,
        author:String
    }
    `
  const BookQuery= `type Query {
        books:[Book],
        book(title:String!):Book,
        addBook(title:String!,author:String):Book
    }`
 
 
 const Bookresolvers ={
     Query:{
         books:()=>Axios.get('http://localhost:3000/Book')
         .then(res => res.data)
         ,
         book:(_,{title})=>{
            Axios.get('http://localhost:3000/Book/'+title)
            .then(res => res.data)
             
         },
         addBook:(_,{title,author})=>{
            Axios.post('http://localhost:3000/Book',{
                title:title,
                author:author
            
            })
            .then(res => res.data)
         }
            
         
    }
 }

 module.exports = {
     type:Booktype,
     Query:BookQuery,
     resolver:Bookresolvers
 }