import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

type homeworkProps = {
	changeScreen: React.Dispatch<React.SetStateAction<number>>,
}

export default function HomeworkBox(props: homeworkProps) {
	return (
		<TouchableHighlight style={styles.box} underlayColor={"#A0C2FF"} onPress={() => {props.changeScreen(3)}}>
			<View>
				<FontAwesome name="briefcase" color="#F2F2F2" size={75} />
				<Text style={styles.name}>Homework</Text>
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
		borderColor: "#4285F4"
	},
	name: {
		color: "#F2F2F2"
	}
})