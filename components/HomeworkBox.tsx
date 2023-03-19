import {StyleSheet, Text, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeworkBox() {
	return (
		<View style={styles.box}>
			<FontAwesome name="briefcase" color="#F2F2F2" size={75} />
			<Text style={styles.name}>Homework</Text>
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
		backgroundColor: "#4285F4",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#4285F4"
	},
	name: {
		color: "#F2F2F2"
	}
})