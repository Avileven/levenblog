import { useState } from "react";
import { useHistory } from "react-router-dom";


// this page is only for the admin to add data to the blog

const NewArticles = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); 
  const [author, setAuthor] = useState('Avi Leventhal');
  const [cat, setCat] = useState('Internet');
  const history = useHistory();

  const date = new Date().toLocaleDateString();
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const blog = { title, body, author,cat,date };
   

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        
         
        />
         <label>Category:</label>
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          <option value="internet">Internet</option>
          <option value="Business">Business</option>
          <option value="General">General</option>
        </select>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <textarea
        required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          
        </textarea>
        <button>Add Blog</button>
      
      </form>
      
    </div>
  );
}
 
export default NewArticles;
