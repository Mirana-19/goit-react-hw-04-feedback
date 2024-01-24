import { nanoid } from 'nanoid';
import { Item, Key, Stat, StatList } from './Feedback.styled';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <>
      <StatList>
        {stats.map(([key, value]) => (
          <Item key={nanoid()}>
            <p>
              <Key>{key}: </Key>
              <span>{value}</span>
            </p>
          </Item>
        ))}
      </StatList>
      <Stat>Total: {total}</Stat>
      <Stat>Positive feedback: {positivePercentage}</Stat>
    </>
  );
};
