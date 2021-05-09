import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from 'helpers/types';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ children }) => {
    const modalElement = useRef(document.createElement('div'));
    modalElement.current.className = "modal";

    useEffect(() => {
        const { current } = modalElement;
        modalRoot.appendChild(current);

        return () => void modalRoot.removeChild(current);
    }, [ modalElement ]);

    return createPortal(<div className="modal-content">{children}</div>, modalElement.current)
}

export default Modal;
