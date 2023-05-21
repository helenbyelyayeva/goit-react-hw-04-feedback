import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [defaultValue, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const total = defaultValue.good + defaultValue.neutral + defaultValue.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return defaultValue.good !== 0
      ? Math.round((defaultValue.good / countTotalFeedback()) * 100)
      : 0;
  };

  // onCount = e => {
  //   setState(prevState => {
  //     const variable = e.target.textContent;
  //     return {
  //       [variable]:prevState[variable] + 1,
  //     };
  //   });
  // };

  const onCount = name => {
    setValue(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  // const onCount = e => {
  //   setValue(prevState => {
  //     const variable = prevState[e.target.textContent];
  //     return { ...prevState, [variable]: variable + 1 };
  //   });
  // };

  const sum = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage()
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(defaultValue)}
          onLeaveFeedback={onCount}
        />
      </Section>

      <Section title="Statistics">
        {sum > 0 ? (
          <Statistic
            good={defaultValue.good}
            neutral={defaultValue.neutral}
            bad={defaultValue.bad}
            total={sum}
            positivePercentage={(positive)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
