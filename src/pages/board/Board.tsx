import React, { useState } from 'react';
import Modal from 'components/modal';

import { Task, Tasks, TaskKeys, EventTarget } from 'helpers/types';
import { Input, Button, Card, Spinner } from 'components';
import { isDebuggerStatement } from 'typescript';

interface TaskForm {
    title: string,
    description: string,
}

const Board = () => {
    const [ isAdding, setIsAdding ] = useState<Boolean>(false);

    // const defaultTasksValue = { 'open': [], 'work in progress': [], 'done': [] };
    const statusValues = [ 'open', 'work in progress', 'done' ];
    const defaultTaskFormValue = { title: '', description: '' };

    const [ tasks, setTasks ] = useState<Array<Task>>([]);
    const [ taskForm, setTaskForm ] = useState<TaskForm>(defaultTaskFormValue);
    const [ selectedTask, setSelectedTask ] = useState<Task | null>(null);

    const handleChangeFormInput = (key: keyof TaskForm, e: EventTarget) => {
        const { target: { value }} = e;
        const currentTaskForm = { ...taskForm };
        currentTaskForm[key] = value;
        setTaskForm(currentTaskForm);
    }

    const handleAddTask = () => {
        const currentTasks = [ ...tasks ];
        currentTasks.push({
            status: 'open',
            id: currentTasks.length,
            ...taskForm
        });

        setIsAdding(false);
        setTasks(currentTasks);
        setTaskForm(defaultTaskFormValue);
    }

    const selectTask = (task: Task, status: string) => {
        setSelectedTask(task);
    }

    const handleChangeTask = (id: number, changeObj: { [ key: string ]: string }) => {
        const currentTasks = [ ...tasks ];

        debugger;

        currentTasks.forEach((item, index) => {
            if (index === id) {
                Object.keys(changeObj).forEach((key) => {
                    // @ts-ignore
                    item[key] = changeObj[key];
                })
            }
        });
        
        setTasks(currentTasks);
    }

    const handleDeleteTask = (id: number) => {
        const currentTasks = [ ...tasks ];
        currentTasks.splice(id, 1);
        
        setTasks(currentTasks);
    }

    const tasksObj:Tasks = {}

    statusValues.forEach((item) => {
        tasksObj[item] = tasks.filter((task) => task.status === item);
    })

    const updaterClassName = selectedTask !== null ? '' : 'invisible';

    return (
        <div className="board-container">            
            <div className="board">
                {
                    Object.keys(tasksObj).map((category, index) => (
                        <div className={`column ${category}`}>
                            <h3>{category}</h3>
                            <div className="content">
                                {
                                    tasksObj[category].map((item: Task) => <Card {...item} onClick={() => selectTask(item, category)} />)
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className="buttons-wrapper">
                <Button onClick={() => setIsAdding(true)}>Add Tasks</Button>
            </div>
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

                        <Button className="createButton" onClick={handleAddTask}>Create Task</Button>
                    </Modal>
                )
            }
            {
                selectedTask !== null && (
                    <Modal>
                        <div className="header">
                            <div>Actions</div>
                            <Button className="close" onClick={() => setSelectedTask(null)}>X</Button>
                        </div>

                        {
                            selectedTask.status === 'open' && <Button className={`${updaterClassName}`} onClick={() => {
                                handleChangeTask(selectedTask.id, {
                                    'status': 'work in progress'
                                });
                                setSelectedTask(null);
                            }}>Start Task</Button>
                        }
                        {
                            selectedTask.status !== 'done' && <Button className={`${updaterClassName}`} onClick={() => {
                                handleChangeTask(selectedTask.id, { 'status': 'done' });
                                setSelectedTask(null);
                            }}>Mark as done</Button>
                        }
                        <Button className={`${updaterClassName} red`} onClick={() => {
                            handleDeleteTask(selectedTask.id);
                            setSelectedTask(null);
                        }}>Delete Task</Button>
                    </Modal>
                )
            }
        </div>
    )
};

export default Board;