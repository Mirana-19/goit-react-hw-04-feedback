import { useState } from 'react';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = key =>
    setFeedback(prev => ({ ...prev, [key]: prev[key] + 1 }));

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    ((feedback.good / countTotalFeedback()) * 100).toFixed() + '%';

  const total = countTotalFeedback();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total >= 1 ? (
        <Section title="Statistics">
          <Statistics
            stats={Object.entries(feedback)}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
