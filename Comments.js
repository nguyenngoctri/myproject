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

const CommentsType=`
      type Comment{
          id:String,
          message:String,
          author:String
      }`

const CommentQuery  =`    type Query{
          PostComment(id:String!,message:String!,author:String!):Comment
          
      }
`
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

module.exports ={
    type:CommentsType,
    Query:CommentQuery,
    resolver:CommentResolvers
}