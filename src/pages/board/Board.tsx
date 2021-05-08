import React, { useState } from 'react';
import Modal from 'components/modal';

import { CardProps, Task, Tasks, EventTarget } from 'helpers/types';
import Input from 'components/input';

const Card = ({ title, description, status }: CardProps) => {
    return <div className="card">
        <h4>{title}</h4>
        <p>{description}</p>
        <span className={status}>{status.toUpperCase()}</span>
    </div>;
}

const Board = ({ user }: { user: string }) => {
    const [ isAdding, setIsAdding ] = useState(false);
    const [ tasks, setTasks ] = useState<Tasks>({});

    const defaultTaskFormValue = { title: '', description: '', status: 'open' };

    const [ taskForm, setTaskForm ] = useState<Task>(defaultTaskFormValue);

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

    return (
        <div>
            <h2>BOARD PAGE for {user}</h2>
            <button onClick={() => setIsAdding(true)}>ADD TASK</button>
            <div className="board">
                {
                    Object.keys(tasks).map((category: string) => (
                        <div className="column">
                            <h3>{category}</h3>
                            <div className="content">
                                {
                                    tasks[category].map((item: Task) => <Card {...item} />)
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
            {
                isAdding && (
                    <Modal>
                        <div className="header">
                            <div>HELLO</div>
                            <button onClick={() => setIsAdding(false)}>X</button>
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