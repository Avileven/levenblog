import { Link } from "react-router-dom";
import pic from '../image/lastarticle.jpg'



// this page link the titles of the blogs to the body and image using the api useFetch

const LastArticle= ({blogs}) => {
  
    const [last] =blogs.slice(-1);
   
    
    return (
      
        <div className="last-title">
        <h1 >Last Article</h1>   
        <img src={pic}   alt='avi'style={{marginLeft: "150px"}} /> 
      {blogs.filter(blog =>blog.id===last.id).map(blog => (
      <div className="blog-preview" key={blog.id} >
        <Link to={`/blogs/${blog.id}`}>
          <h2>{ blog.title }</h2>
        
         
        </Link>
      </div>
    ))}

     
      
      
    </div>
  );
}



 
export default LastArticle;