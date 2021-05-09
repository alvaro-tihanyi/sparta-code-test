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
    status: string,
}

const Board = ({ user }: { user: string }) => {
    const [ isAdding, setIsAdding ] = useState(false);
    const [ tasks, setTasks ] = useState<Tasks>({ 'open': [], 'work in progress': [], 'done': [] });

    const defaultTaskFormValue = { title: '', description: '', status: 'open' };

    const [ taskForm, setTaskForm ] = useState<TaskForm>(defaultTaskFormValue);

    const handleChangeFormInput = (key: 'title' | 'description' | 'status', e: EventTarget) => {
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
        setIsAdding(true);
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
                            <div>HELLO</div>
                            <Button className="close" onClick={() => setIsAdding(false)}>X</Button>
                        </div>

                        <div className="form">
                            <Input label="Task title" value={taskForm.title} onChange={(e: EventTarget) => handleChangeFormInput('title', e)} />
                            <Input label="Task description" value={taskForm.description} onChange={(e: EventTarget) => handleChangeFormInput('description', e)} />
                            <Input label="Task status" value={taskForm.status} onChange={(e: EventTarget) => handleChangeFormInput('status', e)} />
                        </div>

                        <button onClick={handleAddTask}>ADD TASK</button>

                    </Modal>
                )
            }
        </div>
    )
};

export default Board;