import { ReactChildren } from 'react';

type Children = ReactChildren | null | undefined;
type User = { username: string, password: string };
type UpdaterMethod = 'setUsername' | 'setPassword';
type EventTarget = { target: { value: string } };

type TaskForm = {
    [key: string]: string,
    title: string,
}

type ButtonProps = {
    label: string,
    onClick: () => void,
    className?: string,
};

type InputProps = {
    label?: string,
    placeholder?: string,
    type: string,
    value: string,
    onChange: (e: EventTarget) => void,
};

type CardProps = {
    title: string,
    done: boolean,
    isEditting?: boolean,
    onEdit: (...params) => void,
    onDelete: (...params) => void,
    onDone: (...params) => void,
};

type SpinnerProps = { className?: string };

type ModalProps = { children: ReactChildren };

type Task = { title: string, done: boolean };

interface Tasks { [key: string]: Array<Task> }

type TaskKeys = 'status' | 'title' | 'description' | 'id';

type LoginFunction = (user: User) => Promise<unknown>;

export type {
  UpdaterMethod,
  EventTarget,
  ButtonProps,
  InputProps,
  SpinnerProps,
  CardProps,
  ModalProps,
  Task,
  Tasks,
  TaskKeys,
  TaskForm,

  LoginFunction,
};
