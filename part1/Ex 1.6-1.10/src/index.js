import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sum = good + neutral + bad;
  const average = (good - bad) / sum;
  const positive = good / sum;

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  const Button = (props) => {
    return <button onClick={props.clickHandler}>{props.text}</button>;
  };

  const Statistics = (props) => {
    return (
      <div>
        <p>
          {props.text} {props.value} {props.metric}
        </p>
      </div>
    );
  };
  if (sum == 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" clickHandler={handleGood} />

        <Button text="neutral" clickHandler={handleNeutral} />

        <Button text="bad" clickHander={handleBad} />

        <h1>Statistics</h1>
        <p>no feedback available!</p>
      </div>
    );
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" clickHandler={handleGood} />

      <Button text="neutral" clickHandler={handleNeutral} />

      <Button text="bad" clickHander={handleBad} />

      <h1>Statistics</h1>

      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={sum} />
      <Statistics text="average:" value={average} />
      <Statistics text="positive:" value={positive} metric="%" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
