import {Link} from 'react-router-dom';

//  sfc per crare stateless
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>TechBlog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </div>
     );
}
 
export default Navbar;