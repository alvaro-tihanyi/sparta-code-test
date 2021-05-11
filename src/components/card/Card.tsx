import { FC } from 'react';
import { CardProps } from 'helpers/types';

const Card:FC<CardProps> = ({ title, description, onClick }) => {
    return <div className="card" onClick={onClick}>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>;
}


export default Card;