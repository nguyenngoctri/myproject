

const express =require('express');
const bodyParser = require('body-parser');
const {graphiqlExpress,graphqlExpress} =require('apollo-server-express');
const {makeExecutableSchema} =require('graphql-tools');


const Comments=[
    {
        id:"1",
        message:"message 1",
        author:"author1"
    },
    {
        id:"2",
        message:"message 2",
        author:"author 2"
    }
]
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
/*const books =[
    {
        title:"Harry Potter and the Sorcerer's stone",
        author:"J.k Rowling"
    },
    {
        title:"Jurassic Park",
        author:'Michael Crichton'
    }
];
 const typeDefs =`
    type Book {
        title:String,
        author:String
    }
    type Query {
        books:[Book],
        book(title:String!):Book,
        addBook(title:String!,author:String):Book
    }
 
 `
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
 }*/
const Booktype=require('./Books.js');

const CommentsType=require('./Comments.js');

const merge = require('./MergeGraph');

const type = merge.mergeType(Booktype.type,CommentsType.type);
const Query = merge.mergeQuery(Booktype.Query,CommentsType.Query);
const typeDef = type +Query;
console.log(typeDef);
const resolver =merge.mergeResolver(Booktype.resolver,CommentsType.resolver);
console.log(resolver);


const schema = makeExecutableSchema({
     typeDefs:typeDef,
     resolvers:resolver
 });


const app = express();

app.use('/graphql',bodyParser.json(),graphqlExpress({schema}));

app.use('/graphiql',graphiqlExpress({endpointURL:"/graphql"}));

app.listen(3000,()=>{
    console.log('Go to http http://localhost:3000/graphiql to run queries!');
}); 