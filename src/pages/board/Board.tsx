import React, { FC, useState } from 'react';
import { Task, EventTarget, TaskForm } from 'helpers/types.d';
import { Button, Card, Input } from 'components';

const Board:FC = () => {
  const defaultTaskFormValue = { title: '' };
  const [taskForm, setTaskForm] = useState<TaskForm>(defaultTaskFormValue);
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const handleAddTask = () => {
    const currentTaskForm = { ...taskForm };
    const currentTasks = [...tasks];
    currentTasks.push({
      ...currentTaskForm,
      done: false,
    });
    setTasks(currentTasks);
    setTaskForm(defaultTaskFormValue);
  };

  const handleEdit = (id: number, newTitle: string) => {
    const currentTasks = [...tasks];
    currentTasks[id].title = newTitle;
    setTasks(currentTasks);
  };

  const handleChangeDone = (id: number) => {
    const currentTasks = [...tasks];
    const taskToChange = { ...currentTasks[id] };
    currentTasks[id].done = !taskToChange.done;
    setTasks(currentTasks);
  };

  const handleChangeAddInput = (key: string, value: string) => {
    const currentTaskForm = { ...taskForm };
    currentTaskForm[key] = value;
    setTaskForm(currentTaskForm);
  };

  const handleDelete = (id: number) => {
    const currentTasks = [...tasks];
    currentTasks.splice(id, 1);
    setTasks(currentTasks);
  };

  return (
    <div className="container">
      <h2>Tasks</h2>
      <div className="addWrapper">
        <Input type="text" placeholder="Title" value={taskForm.title} onChange={({ target }: EventTarget) => handleChangeAddInput('title', target.value)} />
        <Button label="Add task" className="addButton" onClick={handleAddTask} />
      </div>
      <div className="tasks-container">
        {
          tasks.map(({
            title, done,
          }, index) => {
            console.log(title);

            return (
              <>
                <Card
                  key={title}
                  done={done}
                  title={title}
                  onEdit={(value) => handleEdit(index, value)}
                  onDelete={() => handleDelete(index)}
                  onDone={() => handleChangeDone(index)}
                />
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default Board;
