import {useState, useEffect } from 'react'

//  Un hook deve iniziare sempre con use.
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
        
    //  Viene eseguito il codice all'interno della funzione
    //  ogni volta che c'è un re-render, ogni volta che i dati cambiano
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal })
            .then(res =>{
                if(!res.ok){
                    throw Error('Impossibile prelevare i dati.');
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsPending(false);
            })
            .catch(err =>{ //prende tutti gli errori di network
                if(err.name === 'AbortError'){
                    console.log("fetch aborted");
                }else{
                    setIsPending(false);
                    setError(err.message); // stato sopra
                }
            })
        }, 0); //  simulazione richista dati
    }, [url]);  // se l'url cambia, renderizza di nuovo tutto
    /*
        Depedency array (quello che sta alla fine), 
        è un array che contiene le funzioni che permetteranno l'esecuzione di useEffect().
        Se l'array è vuoto, verrà eseguito una sola volta.
    */

    // ritorno i vari dati
    return {data, isPending, error};    
}

export default useFetch;