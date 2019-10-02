import React,{ Component } from 'react'

export default class Contador extends Component{
    state = {
        numero: this.props.numeroinicial 
    }
    
    
    maisUm = () =>{
         this.alterarNumero(+1)
        // this.setState({ numero: this.state.numero + 1})
        //this.state.numero++
    }
   
    menosUm = () =>{
        
       this.alterarNumero(-1)
        //this.state.numero
    }

    alterarNumero = diferenca =>{
        this.setState({ 
             numero: this.state.numero + diferenca})
        //this.state.numero--
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec10</button>
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