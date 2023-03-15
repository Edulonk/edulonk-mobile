import {StyleSheet, Text, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeworkBox() {
	return (
		<View style={styles.box}>
			<FontAwesome name="briefcase" color="#ffffff" size={75} />
			<Text style={styles.p}>Homework</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		width: "auto",
		height: "30%",
		borderWidth: 1,
		borderRadius: 15,
		margin: "5%",
		backgroundColor: "#000000",
		alignItems: "center",
		justifyContent: "center"
	},
	p: {
		color: "#ffffff"
	}
})