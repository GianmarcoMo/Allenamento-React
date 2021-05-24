import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [autore, setAutore] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const bloccaSubmit = (e)=>{
        //  Blocca il refresh della pagina quando si clicca sul bottone
        e.preventDefault();
        const blog = {title, body, autore}

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Post aggiunto');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })
    }
    return ( 
        <div className='create'>
            <h2>Crea un nuovo post</h2>
            <form onSubmit={bloccaSubmit}>
                <label>Titolo blog</label><br></br>
                <input 
                    type="text" 
                    required
                    onChange ={(e)=> setTitle(e.target.value)}
                /><br></br><br></br>

                <label>Paragrafo</label> <br></br>
                <textarea 
                    required
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea><br></br><br></br>

                <label>Autore</label><br></br>
                <select required onChange={(e)=>setAutore(e.target.value)}>
                    <option value="">Scegli autore</option>
                    <option value="Gianmarco">Gianmarco</option>
                    <option value="Marculillo">Marculillo</option>
                </select><br></br><br></br>

                {!isPending && <button>Invia blog</button>}
                {isPending && <button disabled>Invia post...</button>}
            </form>
        </div>
    );
}
 
export default Create;