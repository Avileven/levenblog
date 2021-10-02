import pic from '../image/avi5.png'
import picface from '../image/facebook.png'
import piclink from '../image/linked.png'



const Home = () => {
  
  return (
    <div className="home">
 
      <div>
      <img src={pic}  width="400" height="300" alt='avi'/>
      </div>
      <div className='person'>
        <h1>Hey, </h1>
        <h1> My name is Avi Leventhal</h1>
        <h3> I'm a Web Developer and Digital Media expert</h3> 
        <h3> I Participated in different rules in the creation process of several early-stages ventures and Co-founded Currensee,
             a social network platform for financial traders.</h3> 
         <h2>In my free-time I enjoy playing tennis and on-line chess.</h2>  
        </div>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/avi-leventhal/"><img src={piclink} alt="HTML tutorial" /></a>
        <a href="https://www.facebook.com/%D7%9C%D7%91%D7%A0%D7%98%D7%A7-%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C%D7%99-100924158014305/"><img src={picface} alt="HTML tutorial" /></a>
       
        </div>
        
      </div>
      
      
    
  );
}
 
export default Home;