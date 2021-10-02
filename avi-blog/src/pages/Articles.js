import useFetch from "../components/useFetch";
import Internet from "../components/Internet";
import Business from "../components/Business";
import General from "../components/General";
import LastArticle from "../components/LastArticle";


// this page shows the overall titles of the blog, fetching the data using useFetch 

const Articles = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  

  return (
    <div className="home">
        
 {/*this is a parent component .we pass the 'blogs' data to the
  child 'BlogList' component* using props */}
    
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <LastArticle blogs={blogs}  /> }
      <div className='title-gen'>
        <h1>Categories </h1>  
      </div>
      { blogs && <Internet blogs={blogs}  /> }
      { blogs && <Business blogs={blogs}  /> }
      { blogs && <General blogs={blogs}  /> }
      
      
     
    </div>
  );
}
 
export default Articles;