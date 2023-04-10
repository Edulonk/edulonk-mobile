import { StyleSheet, Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import TimetableBox from "../components/home/TimetableBox";
import HomeworkBox from "../components/home/HomeworkBox";
import storage from "../storage/storage";

type prop = {
	changeScreen: React.Dispatch<React.SetStateAction<number>>
}

export default function Home(props: prop) {
	const [username, setUsername] = useState("");
	useEffect(() => {
		async function getUsername() {
			await storage.load({
				key: 'loginData'
			}).then(data => {setUsername(data.username)});
		}
		getUsername();
	}, []);

	return (
		<View style={styles.home}>
			<View style={styles.box1}>
				<Text style={styles.h1}>Hello {username}</Text>
				<Text style={styles.name}>15th March 2023</Text>
			</View>
			<TimetableBox changeScreen={props.changeScreen}/>
			<HomeworkBox changeScreen={props.changeScreen}/>
		</View>
	);
}

const styles = StyleSheet.create({
	home: {
		marginTop: "20%",
		display: "flex",
		flex: 1,
		flexDirection: "column",
		marginLeft: 0,
		backgroundColor: "#F2F2F2"
	},
	box1: {
		width: "100%",
		height: "20%",
		alignItems: "center",
	}, box2: {
		width: "auto",
		height: "30%",
		borderWidth: 1,
		borderRadius: 15,
		margin: "5%",
		borderColor: "#4285F4"
	}, box3: {
		width: "auto",
		height: "30%",
		borderWidth: 1,
		borderRadius: 15,
		margin: "5%",
		backgroundColor: "#4285F4"
	},
	h1: {
		fontSize: 50,
		color: "#333333"
	}, name:{
		color: "#333333",
		fontSize: 18
	}
})
