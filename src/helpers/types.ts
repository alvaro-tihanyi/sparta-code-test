import { ReactChildren } from 'react';

type UpdaterMethod = "setUsername" | "setPassword";
type EventTarget = { target: { value: string } };

type InputType = { label: string | undefined, type: string, value: string, onChange: (e: EventTarget) => void, };

type CardProps = { title: string, description: string, status: string };

type ModalProps = { children: ReactChildren }

type Task = { title: string, description: string, status: string }

interface Tasks { [key: string]: Array<Task> }

export type {
    UpdaterMethod,
    EventTarget,
    InputType,
    CardProps,
    ModalProps,
    Task,
    Tasks,
}