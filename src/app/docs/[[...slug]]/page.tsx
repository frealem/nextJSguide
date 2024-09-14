export default function Docs({params,}:{params:{
    slug:string[];
}}) 
{

    if (params.slug?.length===2){
        return <h1>see the feature {params.slug[0]} and the concept is{params.slug[1]}</h1>
    }
    else if(params.slug?.length===1){
        return <h1> see the feature {params.slug[1]}</h1>
    }

    return <h1>see the home page</h1>
}