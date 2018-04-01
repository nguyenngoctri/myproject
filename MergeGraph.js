

const TypeQuery ='type Query';
const resolveQuery="Query"
function mergeType(...args){

    let type ="";
    for(let i=0;i<args.length;i++){
        type = type+args[i];
    }
    return type;
}


function mergeQuery(...query){
    
    let Query ='';
    for(let i=0;i<query.length;i++){
        Query=Query+query[i].replace(TypeQuery,'').replace('{',"").replace('}',"");
        if(i+1<query.length){
           Query= Query+",";
        }
    }

    return TypeQuery+'{'+ Query +"}";
}

function mergeResolver(...Resolver){
    let reQuery={};
    for(let i =0;i<Resolver;i++){
        let Query =Resolver[i][resolveQuery];
        let arrProperty=Object.keys(Query);

        for(let j=0;j<arrProperty.length;j++){
            let nameProperty = arrProperty[j];
            reQuery[nameProperty]=Query[nameProperty];
        }
        console.log(reQuery);

    }
    return {Query:reQuery};
}

module.exports ={
    mergeType:mergeType,
    mergeQuery:mergeQuery,
    mergeResolver:mergeResolver
}