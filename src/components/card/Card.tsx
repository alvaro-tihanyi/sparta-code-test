import React, { FC } from 'react';
import { CardProps } from '../../helpers/types.d';

const Card:FC<CardProps> = ({ title, description, onClick }) => (
  <button type="button" className="card" onClick={onClick}>
    <h4>{title}</h4>
    <p>{description}</p>
  </button>
);

export default Card;
