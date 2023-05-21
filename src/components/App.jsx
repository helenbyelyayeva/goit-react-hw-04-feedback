import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };

  onCount = e => {
    this.setState(prevState => {
      const variable = e.target.textContent;
      return {
        [variable]:prevState[variable] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, netural, bad } = this.state;
    const total = good + netural + bad;
    return total;
  };


  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const sum  = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage()
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {sum > 0 ? (
            <Statistic
              good={this.state.good}
              netural={this.state.netural}
              bad={this.state.bad}
              total={sum}
              positivePercentage={(positive)}
            />
          ) : (
            <Notification message='There is no feedback'/>
          )}
        </Section>
      </>
    );
  }
}
