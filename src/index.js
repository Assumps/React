import React  from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './Componentes/PrimeiroComponente'
import {CompA,CompB} from './Componentes/DoisComponentes'
import MultiElementos from './Componentes/MultiElementos'
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos/>
        {/* <PrimeiroComponente valor="Bom Dia!" aBcD={Math.pow(2,8)}/> }
        {/* <CompA valor="Ola eu sou A"/>
        <CompB valor="B na area!"/> */}
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