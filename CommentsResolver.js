const CommentResolvers={
    CommentQuery:{
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
        },
        deleteComment:(_,{id})=>{
            id

        }
    }
}

module.exports=CommentResolvers;