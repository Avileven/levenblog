import { Link } from "react-router-dom";
import pic from '../image/internet.png'
const Internet = ({blogs}) => {
    return (
      
        <div className="cat-title">
          <h1 >Internet</h1>   
          <img src={pic}   alt='avi'style={{marginLeft: "150px"}} /> 
        {blogs.filter(blog =>blog.cat==='Internet').map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
           
          </Link>
        </div>
      ))}

       
        
        
      </div>
    );
  }
 

 
export default Internet;