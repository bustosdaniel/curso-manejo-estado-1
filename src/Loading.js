import React from 'react';

class Loading extends React.Component {  
  componentDidMount(){
    console.log("componentDidMount")
  }
  
  render() {
    return (
     <p>Cargando...</p> 
    );
  }
}

export { Loading };
