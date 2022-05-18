import React from 'react';
import Main from './Main';
import Home from './Home';


export default function App() {
    const [init, setInit] = React.useState(false);
    return (
        <>
           {!init ? <Home setInit={setInit}/> : <Main />}
        </>  
    );
}