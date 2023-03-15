import { StyleSheet, Text, View, Button } from "react-native";
import React, {useEffect, useState} from "react";
import TimetableBox from "../components/TimetableBox";
import HomeworkBox from "../components/HomeworkBox";
import storage from "../storage/storage";
import {edulink} from "./Login";


export default function Home() {
	const [username, setUsername] = useState("");
	useEffect(() => {
		async function getUsername() {
			await storage.load({
				key: 'username'
			}).then(data => {setUsername(data.user)});
		}
		getUsername();
	}, []);

	return (
		<View style={styles.home}>
			<View style={styles.box1}>
				<Text style={styles.h1}>Hello {username}</Text>
				<Text>15th March 2023</Text>
			</View>
			<TimetableBox />
			<HomeworkBox />
		</View>
	);
}

const styles = StyleSheet.create({
	home: {
		marginTop: "20%",
		display: "flex",
		flex: 1,
		flexDirection: "column",
		marginLeft: 0
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
		backgroundColor: "#000000"
	}, box3: {
		width: "auto",
		height: "30%",
		borderWidth: 1,
		borderRadius: 15,
		margin: "5%",
		backgroundColor: "#000000"
	},
	h1: {
		fontSize: 50
	}, p:{
		color: "#ffffff",
		fontSize: 18
	}
})
