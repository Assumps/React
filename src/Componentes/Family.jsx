import React from 'react'
import {componentesFilhosComProps} from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>

        {componentesFilhosComProps(props)}

        {/* {React.Children.map(props.children,componenteFilho =>{
            return React.cloneElement(componenteFilho,{...props})
        })} */}
        {/* {React.cloneElement(props.children,{...props})} */}
        {/* {React.cloneElement(props.children,props)} */}        
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>