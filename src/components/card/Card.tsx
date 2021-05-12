import React, { FC, useState } from 'react';
import { string, func, bool } from 'prop-types';
import { CardProps, EventTarget } from 'helpers/types.d';
import Button from 'components/button';
import Input from 'components/input';

const Card:FC<CardProps> = ({
  title, done, onEdit, onDelete, onDone,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [hiddenInputValue, setHiddenInputValue] = useState<string>(title);

  const hiddenInputComponent = <Input type="text" value={hiddenInputValue} onChange={({ target }: EventTarget) => setHiddenInputValue(target.value)} />;
  const editButtonProps = {
    label: isEditing ? 'Finish Edit' : 'Edit',
    onClick: isEditing ? () => {
      setIsEditing(false);
      onEdit(hiddenInputValue);
    } : () => setIsEditing(true),
  };

  return (
    <div className={`card ${done ? 'done' : ''}`}>
      <div className="card-header">
        { isEditing ? hiddenInputComponent : <h4>{title}</h4> }
      </div>
      { done && <h3>DONE</h3> }
      <div className="card-buttons">
        {
          !done && <Button label={editButtonProps.label} onClick={editButtonProps.onClick} />
        }
        <Button label={done ? 'Open task again' : 'Done'} onClick={onDone} />

        <Button className="deleteButton" label="Delete" onClick={onDelete} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: string.isRequired,
  done: bool.isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  onDone: func.isRequired,
};

export default Card;
