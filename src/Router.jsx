import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Frutas from "./Pages/Frutas";
import Verduras from './Pages/Verduras';
import Home from './Pages/Home';
import Character from './Pages/Character';

function MyRoutes (){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/character/:id" element={<Character/>}/>
            <Route path="/frutas" element={<Frutas/>}/>
            <Route path="/verduras" element={<Verduras/>}/>            
            <Route path="/" element={<h1>hola</h1>}/>
            <Route path="/adios" element={<h1>Adios mundo</h1>}/> 
        </Routes>
    </BrowserRouter>
    )  
}

export default MyRoutes
