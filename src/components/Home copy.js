import {useState} from 'react';

const Home = () => {
    const [name, changeName] = useState("mario");
    let [volte, incrementaValore] = useState(0);

    const handleClick = (e) =>{
        incrementaValore(volte+=1);
        console.log("Ciao, "+ name);
        //console.log("Tasto premuto: " + volte);
    }

    const handleClickAgain = (nome, e) =>{
        changeName('Gianmarco');
        console.log("Ciao, " + nome);
    } 
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button> 
            <br/>
            <button onClick={(e)=>handleClickAgain(name,e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
/*
    Per utilizzare una funzione con parametri si usa l'array function all'interno
    dell'elemento html.

    onClick={()=>handleClickAgain("Gianmarco")}

*/