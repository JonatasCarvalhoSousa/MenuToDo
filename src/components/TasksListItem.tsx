import React, { StatelessComponent } from "react";
import { Task } from "../models/task";
import { AddTask } from '../styled';

export interface TasksListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: StatelessComponent<TasksListItemProps> = ({
  task,
  onDelete
}) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <ul>
      <li>
        {task.name} <AddTask onClick={onClick}>Concluido \o/</AddTask>
      </li>
    </ul>
    
  );
};