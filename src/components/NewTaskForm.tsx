import React, { StatelessComponent } from "react";
import { Task } from "../models/task";
import styled from "styled-components";


const AddTask = styled("button")`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export interface NewTaskFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

function itemAdd() {
    alert('item adicionado!!!');
  }

export const NewTaskForm: StatelessComponent<NewTaskFormProps> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>     
    <input onChange={onChange} value={task.name}/>
    <AddTask>
    <button onClick={itemAdd}>Adicionar item</button>
    </AddTask>     
  </form>  
  
);


