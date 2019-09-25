import React  from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './Componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom Dia!" aBcD={Math.pow(2,8)}/>
    </div>
, elemento)


// const elemento = document.getElementById('root')
// ReactDOM.render(
//     <ul>
//         <li>1) Pedro</li>
//         <li>2) Maria</li>
//         <li>3) Ana</li>
//     </ul>
// , elemento)