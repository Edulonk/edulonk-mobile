import {StyleSheet, Text, View} from "react-native";

type lessonProps = {
	subject: string,
	room: string,
	teacher: string,
	times: {
		start: string,
		end: string
	},
	colour: number
}


let colours = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]

export default function Lesson(props: lessonProps) {

	const styles = StyleSheet.create({
		lesson: {
			width: "100%",
			height: "auto",
			borderLeftWidth: 4,
			display: "flex",
			flexDirection: "row",
			gap: 0,
			marginBottom: "5%",
			borderLeftColor: colours[props.colour]
		},
		box: {
			width: "40%",
			height: "auto",
			paddingLeft: "2%"
		}
	})

	return (
		<View style={styles.lesson}>
			<View style={styles.box}>
				<Text>{props.subject}</Text>
				<Text>{props.room ?? "PE"}</Text>
			</View>
			<View style={styles.box}>
				<Text>{props.teacher}</Text>
				<Text>{props.times.start} - {props.times.end}</Text>
			</View>
		</View>
	)
}

