import { Link } from "react-router-dom";
import pic from '../image/business.png'


// this page link the titles of the blogs to the body and image using the api useFetch

const Business= ({blogs}) => {
 
  
    return (
      
        <div className="cat-title">
          <h1> Business</h1>  
          <img src={pic} className='pic'  alt='avi' style={{marginLeft: "150px"}} /> 
        {blogs.filter(blog =>blog.cat==='Business').map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
           
          </Link>
        </div>
      ))}

       
        
        
      </div>
    );
  }
 

 

 
export default Business