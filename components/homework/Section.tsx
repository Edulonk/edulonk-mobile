import {Homework} from "edulinkone-api/build/types/result";
import {StyleSheet, View} from "react-native";
import React from "react";
import Task from "./Task";

type SectionProps = {
	homework: Array<Homework>
}

export default function Section(props: SectionProps) {
	let tasks: Array<JSX.Element> = [];

	props.homework.sort((a, b) => {
		let c = new Date(a.available_date).getTime();
		let d = new Date(b.available_date).getTime();
		return c - d;
	})

	for (let i = 0; i < props.homework.length; i++) {
		tasks.unshift(
			<Task dueDate={props.homework[i].due_date}
				  name={props.homework[i].activity}
				  class={props.homework[i].subject}
				  completed={props.homework[i].completed}
				  raw={props.homework[i]}
			/>
		)
	}

	return(
		<View style={styles.Section}>
			{tasks}
		</View>
	)
}

const styles = StyleSheet.create({
	Section: {
		width: "100%",
		borderBottomWidth: 2
	}
})