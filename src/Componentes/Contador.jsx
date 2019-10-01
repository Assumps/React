import React,{ Component } from 'react'

export default class Contador extends Component{
    
    
    
    maisUm = () =>{
         this.props.numero++
    }
   
    menosUm(){
        this.props.numero--
    }

    render(){
        return(
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}

// Solução 1 Função Bind
     // constructor(props){
         //     super(props)
         //     this.maisUm = this.maisUm.bind(this)
         // }

//Solução 2 Função arrow onClick
    // <button onClick={() => this.maisUm()}>Inc</button>

//Solução 3 Função arrow
    // maisUm = () =>{
    //     // this.props.numero++
    //     console.log(this)
    // }