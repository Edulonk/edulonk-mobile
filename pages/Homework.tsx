import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {edulink} from "../helper/edulinkHelp";
import storage from "../storage/storage";
import Section from "../components/homework/Section";

export function Homework(props: {changeScreen: React.Dispatch<React.SetStateAction<number>>}) {
	let [currentHomework, setCurrentHomework] = useState([]);
	// let [pastHomework, setPastHomework] = useState([]);
	let [username, setUsername] = useState(null);
	let [isReady, makeReady] = useState(false);
	useEffect(() => {
		async function getData() {
			try {
				let data = await edulink.getCurrentHomework();
				// @ts-ignore
				setCurrentHomework(data);

				// let data1 = await edulink.getPastHomework();
				// // @ts-ignore
				// setPastHomework(data1);

				await storage.load({
					key: 'username'
				}).then(data => {
					setUsername(data.user)
				});
			} catch (e) {
				console.warn(e);
			} finally {
				makeReady(true);
			}
		}

		getData();
	}, []);

	if(!isReady) {
		return (
			<View style={styles.loading}>
				<Text>LOADING . . . </Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.box1}>
				<Button title={"Back"} onPress={() => props.changeScreen(1)}/>
				<Text style={styles.h2}>Homework: {username ?? "12x34567"}</Text>
			</View>
			<ScrollView style={styles.box2}>
				<Text style={styles.text}>Current</Text>
				<Section homework={currentHomework} />
				{/*<Text style={styles.text}>Past</Text>*/}
				{/*<Section homework={pastHomework} />*/}
			</ScrollView>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: "20%",
		width: "100%",
		flexDirection: "column",
		backgroundColor: "#F2F2F2"
	},
	box1: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		paddingBottom: "5%",
		justifyContent: "center",
		gap: 20
	},
	box2: {
		width: "100%",
		paddingLeft: "5%",
		paddingRight: "5%",
		marginBottom: "15%"
	},
	h2: {
		fontSize: 25,
		color: "#333333",
	},
	text: {
		paddingBottom: "2%",
		fontSize: 18,
		fontWeight: "bold"
	},
	loading: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%"
	}
})