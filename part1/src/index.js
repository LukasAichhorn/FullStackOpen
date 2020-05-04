import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
	return <h1>{props.course}</h1>;
};
const Content = (props) => {
	<Part part={props} exercises={} />;
};

const Total = (props) => {
	const sum = props.ex1 + props.ex2 + props.ex3;
	return <p>Number of exercises {sum}</p>;
};
const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content part1={} ex1={} />
			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
