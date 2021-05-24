import { Link } from "react-router-dom";

//  come argomento puoi usare props o scomporre con {}
const BlogList = ({blogs, cancellaBlog}) => {
    //const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="articolo" id={blog.id}>
                    <Link to={'/blogs/'+blog.id}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <p>Autore: {blog.autore}</p>
                    <br/>
                    {/*<p>{blog.body}</p>*/}
                    <br/>
                    {/*<button {onClick={()=>cancellaBlog(blog.id)}}>Delete post</button>*/}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
