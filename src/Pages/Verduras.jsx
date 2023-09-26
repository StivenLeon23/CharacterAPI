import React from 'react'
import Header from '../Layouts/Header'

function Verduras (){
    const verduras =['Zanahoria', 'Papa', 'Morron', 'Brocoli']
    
    return (
        <div>
            <Header name="Verduras"/>
            <h2>Estas son mis Verduras favoritas</h2>
            {
                verduras.map((verdura)=>{
                    return <p>{verdura} </p>
                })
            }
        </div>
    )
}

export default Verduras
