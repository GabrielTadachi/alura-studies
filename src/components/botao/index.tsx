import React from "react";

//Class Component -> Forma Antiga!
class Botao extends React.Component {
  render() {
    const isActive = false;
    const styles = {
      backgroundColor: isActive ? 'green' : 'red'
    }
    return (
      <button style={styles}>Botão</button>
    );
  }
}

export default Botao;
