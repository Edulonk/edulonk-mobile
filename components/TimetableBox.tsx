import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {edulink} from "../pages/Login";

export default function TimetableBox() {
	return (
		<TouchableHighlight style={styles.box} underlayColor={"#A0C2FF"}>
			<View style={styles.margin}>
				<View style={styles.container}>
					<FontAwesome name="clock-o" color="#F2F2F2" size={65} />
					<Text style={styles.name}>Timetable</Text>
				</View>
				<View>
					<Text>Today</Text>
				</View>
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
		// alignItems: "center",
		// justifyContent: "center",
		borderColor: "#4285F4",
	},
	container: {
		display: "flex",
		flexDirection: "row",
	},
	margin: {
		marginLeft: "3%",
		marginTop: "3%",
	},
	name: {
		fontSize: 20,
		color: "#F2F2F2",
		position: "absolute",
		transform: [{translateX: 60}, {translateY: 15}]
	}
})