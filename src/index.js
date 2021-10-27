import React from "react";
import ReactDOM from "react-dom";

function Phone(props) {
	return <h2> I am a {props.version.year}!!!</h2>;
}

function IT() {
	const IT = { sector: "security", year: "2021" };
	return (
		<>
			<h1> What kind of phone do I have? </h1>
			<Phone version={IT} />
		</>
	);
}

ReactDOM.render(<IT />, document.getElementById("root"));
