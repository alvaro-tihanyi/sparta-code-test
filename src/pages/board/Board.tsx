import React, { useState } from 'react';
import Modal from 'components/modal';

import { CardProps, Task, Tasks, EventTarget } from 'helpers/types';
import { Input, Button } from 'components';

const Card = ({ title, description, onClick }: CardProps) => {
    return <div className="card" onClick={onClick}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>;
}

interface TaskForm extends Task {
    title: string,
    description: string,
    status: string,
}

const Board = ({ user }: { user: string }) => {
    const [ isAdding, setIsAdding ] = useState(false);
    const [ isUpdating, setIsUpdating ] = useState(false);
    const [ tasks, setTasks ] = useState<Tasks>({ 'open': [], 'work in progress': [], 'done': [] });

    const defaultTaskFormValue = { title: '', description: '', status: 'open' };
    const [ taskForm, setTaskForm ] = useState<TaskForm>(defaultTaskFormValue);

    const handleChangeFormInput = (key: keyof TaskForm, e: EventTarget) => {
        const { target: { value }} = e;
        const currentTaskForm = { ...taskForm };
        currentTaskForm[key] = value;
        setTaskForm(currentTaskForm);
    }

    const handleAddTask = () => {
        const { status } = taskForm;
        const currentTasks = { ...tasks };

        if (currentTasks[status] === undefined) {
            currentTasks[status] = [];
        }

        currentTasks[status].push(taskForm);

        setIsAdding(false);
        setTasks(currentTasks);
        setTaskForm(defaultTaskFormValue);
    }

    const handleUpdateTask = (form: TaskForm) => {
        setTaskForm(form);
        setIsUpdating(true);
    }

    const handleChangeTask = () => {
        
    }

    return (
        <div className="board-container">
            <div className="board">
                {
                    Object.keys(tasks).map((category: string) => (
                        <div className={`column ${category}`}>
                            <h3>{category}</h3>
                            <div className="content">
                                {
                                    tasks[category].map((item: Task) => <Card {...item} onClick={() => handleUpdateTask({ status: category, ...item })} />)
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
            <Button onClick={() => setIsAdding(true)}>Add Tasks</Button>
            {
                isAdding && (
                    <Modal>
                        <div className="header">
                            <div>Add a new task</div>
                            <Button className="close" onClick={() => setIsAdding(false)}>X</Button>
                        </div>

                        <div className="form">
                            {
                                Object.keys(taskForm).map((taskAttribute) =>
                                    <Input
                                        label={`Task ${taskAttribute}`}
                                        value={taskForm[(taskAttribute as keyof TaskForm)]}
                                        onChange={(e: EventTarget) => handleChangeFormInput((taskAttribute as keyof TaskForm), e)}
                                    />
                                )
                            }
                        </div>

                        <button onClick={handleAddTask}>ADD TASK</button>
                    </Modal>
                )
            }

            {
                isUpdating && (
                    <Modal>
                        <div className="header">
                            <div>Update {taskForm.title}</div>
                            <Button className="close" onClick={() => setIsUpdating(false)}>X</Button>
                        </div>

                        <div className="form">
                            {
                                Object.keys(taskForm).map((taskAttribute) => <Input label={`Task ${taskAttribute}`} value={taskForm[(taskAttribute as keyof TaskForm)]} onChange={(e: EventTarget) => handleChangeFormInput((taskAttribute as keyof TaskForm), e)} />)
                            }
                        </div>

                        <button onClick={handleChangeTask}>Update Task</button>
                    </Modal>
                )
            }
        </div>
    )
};

export default Board;