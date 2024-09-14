export default function Eachblog({params}:{params:{eachblog:string,
    review:string
}}){
    return(<h1>I's about each blog {params.eachblog} with review of {params.review}</h1>)
    }