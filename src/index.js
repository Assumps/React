import React  from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './Componentes/PrimeiroComponente'
// import CompA, {CompB as B} from './Componentes/DoisComponentes'
//  import MultiElementos from './Componentes/MultiElementos'
// import Familia from './Componentes/familia'
// import Family from './Componentes/Family'
// import Membro from './Componentes/Membro'
//import ComponenteComFunction from './Componentes/ComponenteComFunction'
import Pai from './Componentes/Pai'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Pai />
        {/* <ComponenteComFunction/> */}
        {/* <Family sobrenome=" Pereira ">
            <Membro nome="Andre"/>
            <Membro nome="Mariana"/>
        </Family> */}
        {/* <Family>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Gustavo" sobrenome="Arruda"/>
        </Family> */}
        {/* {<Familia/> } */}
        {/* <MultiElementos/> */}
        {/* { <PrimeiroComponente valor="Bom Dia!" aBcD={Math.pow(2,8)}/> } */}
        {/* {<CompA valor="Ola eu sou A"/>} */}
        {/* {<B valor="B na area!"/>} */}
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