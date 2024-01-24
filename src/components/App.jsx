import React, { Component } from 'react';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key =>
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed() + '%';

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total >= 1 ? (
          <Section title="Statistics">
            <Statistics
              stats={Object.entries(this.state)}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
