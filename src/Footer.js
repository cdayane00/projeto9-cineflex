import Home from "./Home";
import React from 'react';


export default function Footer({title, source}){
    return(
        <footer className="footer">
            <img src={source}/>
            <p>{title}</p>
        </footer>
    )
}