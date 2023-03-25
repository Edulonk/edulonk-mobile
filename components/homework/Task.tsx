import {StyleSheet, Text, View} from "react-native";
import {Homework} from "edulinkone-api/build/types/result";

type TaskProps = {
	dueDate: string,
	name: string,
	class: string,
	completed: boolean,
	raw: Homework
}

let colours = ["#DB4437", "#0F9D58"]

export default function Task(props: TaskProps) {

	let completed = (props.completed ? 1 : 0);

	const styles = StyleSheet.create({
		task: {
			width: "100%",
			height: "auto",
			borderLeftWidth: 4,
			display: "flex",
			flexDirection: "row",
			gap: 0,
			marginBottom: "5%",
			borderLeftColor: colours[completed]
		},
		box: {
			width: "40%",
			height: "auto",
			paddingLeft: "2%"
		}
	})

	return (
		<View style={styles.task}>
			<View style={styles.box}>
				<Text>{props.name}</Text>
				<Text>{props.dueDate}</Text>
			</View>
			<View style={styles.box}>
				<Text>{props.class}</Text>
			</View>
		</View>
	)
}