import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {EdulinkTypes} from "edulinkone-api";
import Lesson from "./Lesson";

type DayProps = {
	day: EdulinkTypes.ResultTypes.Day
}

export default function Day(props: DayProps) {
	let lessons: Array<JSX.Element> = [];

	for (let j = 0; j < props.day.lessons.length; j++) {
		lessons.push(
			<Lesson
				subject={props.day.lessons[j].teaching_group.subject}
				room={props.day.lessons[j].room.name}
				teacher={props.day.lessons[j].teachers}
				times={{
					start: props.day.periods[j].start_time,
					end: props.day.periods[j].end_time
				}}
				colour={j % 4}
			/>
		)
	}

	return (
		<View style={styles.Day}>
			<Text style={styles.text}>{props.day.name} {props.day.date}</Text>
			{lessons}
		</View>
	);
}

const styles = StyleSheet.create({
	Day: {
		width: "100%",
		borderBottomWidth: 2,
	},
	text: {
		paddingBottom: "2%",
		fontSize: 18,
		fontWeight: "bold"
	}
})