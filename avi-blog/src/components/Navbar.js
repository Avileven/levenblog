import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="navbar">
     
      <h1>The Leventhal's Blog</h1>
     
      <div className="links">
        <Link to="/">Home</Link>
            
        
        <Link to="/blog">My Blog</Link>
      </div>
    
  
    </nav>
  );
}
 
export default Navbar;
