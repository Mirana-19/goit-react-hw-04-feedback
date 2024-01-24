import { nanoid } from 'nanoid';
import React from 'react';
import { Button, ButtonList } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonList>
        {options.map(button => (
          <li key={nanoid()}>
            <Button type="button" onClick={() => onLeaveFeedback(button)}>
              {button}
            </Button>
          </li>
        ))}
      </ButtonList>
    </>
  );
};
