import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
<div className="not-found">
<h1>
 Sorry, it seem you have been lost...
</h1>
<Link to='/'>go back to the home page</Link> 
</div>

     );
}
 
export default NotFound;