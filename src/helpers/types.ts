import { ReactChildren } from 'react';

type UpdaterMethod = "setUsername" | "setPassword";
type EventTarget = { target: { value: string } };

type ButtonProps = { label: string, onClick: () => void, className: string | undefined };

type InputType = { label: string | undefined, type: string, value: string, onChange: (e: EventTarget) => void, };

type CardProps = { title: string, description: string, onClick: (...params: any) => void };

type ModalProps = { children: ReactChildren }

type Task = { title: string, description: string }

interface Tasks { [key: string]: Array<Task> }

export type {
    UpdaterMethod,
    EventTarget,
    ButtonProps,
    InputType,
    CardProps,
    ModalProps,
    Task,
    Tasks,
}