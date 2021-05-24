import { useParams } from "react-router";
import { useHistory} from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () =>{
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();

    const gestisciDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-datails">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Scritto da {blog.autore}</p>
                    <br></br>
                    <p>{blog.body}</p>
                    <button onClick={gestisciDelete}>Cancella</button>
                </article>
            )}            
        </div>
    );
}

export default BlogDetails;