import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista({tarefas}: {tarefas: ITarefa[]}) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
