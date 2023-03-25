import {Button, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {Homework} from "edulinkone-api/build/types/result";
import {useCallback, useState} from "react";
import {edulink} from "../../pages/Login";

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

	let [showDescription, toggleDescription] = useState(false);
	let [description, setDescription] = useState("Such empty");
	let [colour, setColour] = useState(colours[completed]);

	const getData = useCallback(() => {
			async function getData() {
				let data = await edulink.getHomeworkDescription({id: props.raw.id, source: "EduLink"});
				let desc = ((data.result.homework.description.replace(/<[br]*>/gm, "\n"))
					.replace(/<[^>]*>?/gm, ''))
					.replace(/&[^;]*;/gm, '');
				//@ts-ignore
				setDescription(desc);
			}

			getData();
			toggleDescription(!showDescription);
	}, [showDescription]);

	const completeTask = useCallback(() => {
		async function complete() {
			await edulink.completeHomework({id: props.raw.id, completed: !props.completed});
		}
		complete();
		setColour(colours[(completed == 1 ? 0 : 1)]);
	}, [setColour]);

	let style = {
		task: {
			width: "100%",
			height: "auto",

			marginBottom: "5%",
		},
		box: {
			width: "44%",
			height: "auto",
			paddingLeft: "2%"
		},
		cont: {
			width: "100%",
			height: "auto",
			borderLeftWidth: 4,
			display: "flex",
			flexDirection: "row",
			gap: 0,
			borderLeftColor: colour
		}
	}


	//@ts-ignore
	let styles = StyleSheet.create(style);

	return (
		<TouchableHighlight style={styles.task} onPress={() => {
			getData();
		}} underlayColor={"#E6E6E6"}>
			<View style={styles.cont}>
				<View style={styles.box}>
					<Text>{props.name}</Text>
					<Text>{props.dueDate}</Text>
					{showDescription ? (<Button title={"complete"} onPress={completeTask}/>) : null}
				</View>
				<View style={styles.box}>
					<Text>{props.class}</Text>
					<Text>{showDescription ? description: ""}</Text>
				</View>
			</View>
		</TouchableHighlight>
	)
}