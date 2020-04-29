import React from 'react';
import { connect } from "react-redux";
import * as axios from "axios";

const Main = () => {
	let arr = [];

	if (arr.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			debugger;
			arr = response.data.items;
			console.log(arr);

		});
	}

	return (
		<div>
			"https://social-network.samuraijs.com/api/1.0/users"
		</div>
	)
}

export default connect(
	state => ({
		// lvl: state.lvl,
		// time: state.time
	}),
	dispatch => ({
		// onAddTime: (time) => {
		// 	dispatch({ type: "ADD_TIME", payload: { time: time } })
		// }
	})
)(Main);
