import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
   
    
    return (
      <div className="blog-details">     
        { isPending && <div>updating...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
        
            <h1>  { blog.cat }</h1>
            <h2>{ blog.title }</h2>
            {blog.img && <img 
            // the src it structured to catch the img of an article from the json file 
           src ={`${process.env.PUBLIC_URL}/assets/${blog.img}`} 
             alt="loko"/>}
                      
            <div>{ blog.body }</div>
            <p>Written by { blog.author }</p> 
            <h3>posted on { blog.date }</h3>       
             
          
          </article>
        )}
      </div>
    );
  }
   
  export default BlogDetails;