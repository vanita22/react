import React from 'react';
import Componentetonto from './compo_hijo';

class ComponenteFuncionall1 extends React.Component {
    
    constructor(props)

    {
        super(props)
        this.state={nombres: ['nombre 1', 'nombre 2', 'nombre 3']}
    }

    cambiar_estado()
    {
        this.setState({nombres: ['otro nombre', 'otro nombre 2', 'otro nombre 3']})
    }

render() {
    console.log('viendo cambios');
    return (
        <div className="App">
            <a>COmpomente funcional 1</a>

            <br />
            <br />
            <button onClick={this.cambiar_estado.bind(this)}>Cambiar estado</button>
            <ol id="lista2">
                <ul>
                    {this.state.nombres.map((nombre)=>
                        <li key={nombre}> <Componentetonto nombre_lista={nombre}/> </li>
                    )}
                </ul>
            </ol>
       
        </div>     
    )
  }
}

export default ComponenteFuncionall1