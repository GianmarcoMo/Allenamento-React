import {Link} from 'react-router-dom'

const NotFound = () =>{
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Nessuna pagina trovata! :(</p>
            <Link to='/'>Torna alla home page</Link>
        </div>
    );
}

export default NotFound;