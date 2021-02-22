import React, { StatelessComponent } from "react";
import { Task } from "../models/task";
import { AddTask } from '../styled';

export interface NewTaskFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

let now=new Date();
let month = new Array();
  month[0] = "1";
  month[1] = "2";
  month[2] = "3";
  month[3] = "4";
  month[4] = "5";
  month[5] = "6";
  month[6] = "7";
  month[7] = "8";
  month[8] = "9";
  month[9] = "10";
  month[10] = "11";
  month[11] = "12";
  let n = month[now.getMonth()];
function itemAdd() {
    
    alert('item adicionado!!!' + " " + now.getDate() + "/" + n + "/" + now.getFullYear() + " - " + now.getHours() + ":" + now.getMinutes());
  }

export const NewTaskForm: StatelessComponent<NewTaskFormProps> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>     
    <input onChange={onChange} value={task.name}/>
    <br></br>
    <br></br>
    <AddTask onClick={itemAdd}>
        Adicionar tarefa
    </AddTask>     
  </form>  
);


