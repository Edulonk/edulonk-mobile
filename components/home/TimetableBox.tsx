import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {edulink} from "../../pages/Login";
import React, {useEffect, useState} from "react";

type timetableProps = {
	changeScreen: React.Dispatch<React.SetStateAction<number>>
}

export default function TimetableBox(props: timetableProps) {

	let [timetable, setTimetable] = useState(null);
	useEffect(() => {
		async function getTimetable() {
			const result = await edulink.getToday();
			// @ts-ignore
			setTimetable(`${result.periods[0].name}`);
		}

		getTimetable()
	})

	return (
		// <TouchableHighlight style={styles.box} underlayColor={"#A0C2FF"}>
		<TouchableHighlight style={styles.box} underlayColor={"#A0C2FF"} onPress={() => {props.changeScreen(2)}}>
			<View style={styles.container}>
				<FontAwesome name="clock-o" color="#F2F2F2" size={65} />
				<Text style={styles.name}>{/*timetable ??*/ "Timetable"}</Text>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	box: {
		width: "auto",
		height: "30%",
		borderWidth: 1,
		borderRadius: 15,
		margin: "5%",
		backgroundColor: "#4285F4",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#4285F4",
	},
	container:  {
		alignItems: "center",
		justifyContent: "center"
	},
	margin: {
		marginLeft: "3%",
	},
	name: {
		fontSize: 20,
		color: "#F2F2F2",
	}
})