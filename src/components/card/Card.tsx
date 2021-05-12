import React, { FC } from 'react';
import { string, func } from 'prop-types';
import { CardProps } from 'helpers/types.d';

const Card:FC<CardProps> = ({ title, description, onClick }) => (
  <button type="button" className="card" onClick={onClick}>
    <h4>{title}</h4>
    <p>{description}</p>
  </button>
);

Card.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  onClick: func.isRequired,
};

export default Card;
