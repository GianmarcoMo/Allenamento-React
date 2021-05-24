import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    /*
    const cancellaBlog = (id) =>{
        //  Crea un nuovo insieme di post con l'id diverso da quello del parametro
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }*/
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading data...</div>}
            {blogs && <BlogList blogs={blogs} /*cancellaBlog={cancellaBlog}*/ />}
        </div>
    );
}
 
export default Home;
// blogs.filter((blog)=>blog.autore === 'nome')