import React from "react";
import style from './Botao.module.scss';

//Class Component -> Forma Antiga!
// class Botao extends React.Component<{children?: React.ReactNode}> {
//   render() {
//     return (
//       <button className={style.botao}>{this.props.children}</button>
//     );
//   }
// }

// export default Botao;

export default function Botao({children} : {children: React.ReactNode}){
  return(
    <button className={style.botao}>{children}</button>
  )
}