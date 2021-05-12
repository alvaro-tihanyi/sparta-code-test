import { ReactChildren } from 'react';

type Children = ReactChildren | null | undefined;
type User = { username: string, password: string };
type UpdaterMethod = 'setUsername' | 'setPassword';
type EventTarget = { target: { value: string } };

type ButtonProps = {
    label: string,
    onClick: () => void,
    className: string | undefined,
};

type InputProps = {
    label: string | undefined,
    type: string,
    value: string,
    onChange: (e: EventTarget) => void,
};

type CardProps = { title: string, description: string, onClick: (...params: any) => void };

type SpinnerProps = { className: string | undefined };

type ModalProps = { children: ReactChildren };

type Task = { id: number, title: string, description: string, status: string };

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

  LoginFunction,
};
