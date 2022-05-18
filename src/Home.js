import { useState, useEffect } from 'react';
// import filme from "./assets/filme1.png";
import axios from 'axios';


export default function Home({setInit}){
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        requisicao.then(response => {
            setFilmes(response.data.posterURL);
        });
        console.log(requisicao);
    },[]);

    return(
        <div>
            <div className='topo'>
                <h1>CINEFLEX</h1>
            </div>
            <h3 className='selecionar'>Selecione o filme</h3>
            {/* lista de filmes */}
            <div onClick={()=>setInit(true)} className='listaFilmes'>
                {filmes.map(filme => <img src={filme}/>)}
            </div>
        </div>
    )
}