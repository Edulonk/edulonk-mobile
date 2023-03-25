import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

type timetableProps = {
	changeScreen: React.Dispatch<React.SetStateAction<number>>
}

export default function TimetableBox(props: timetableProps) {

	return (
		<TouchableHighlight style={styles.lesson} underlayColor={"#A0C2FF"} onPress={() => {props.changeScreen(2)}}>
			<View style={styles.container}>
				<FontAwesome name="clock-o" color="#F2F2F2" size={65} />
				<Text style={styles.name}>{"Timetable"}</Text>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	lesson: {
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