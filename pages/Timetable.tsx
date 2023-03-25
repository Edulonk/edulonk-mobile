import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';

import {edulink} from "./Login";
import storage from "../storage/storage";
import Day from "../components/timetable/Day";
import ScrollView = Animated.ScrollView;

export default function Timetable(props: {changeScreen: React.Dispatch<React.SetStateAction<number>>}) {
	let [timetable, setTimetable] = useState([]);
	let [username, setUsername] = useState(null);
	let [isReady, makeReady] = useState(false);
	useEffect(() => {
		async function getData() {
			try {
				const result = await edulink.getThisWeek();
				// @ts-ignore
				setTimetable(result.days);

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

	if (!isReady) {
		return null;
	}

	let days: Array<JSX.Element> = [];

	timetable.forEach((day) => {
		days.push(<Day day={day} />)
	});

	return (
		<View style={styles.container}>
			<View style={styles.box1}>
				<Button title={"Back"} onPress={() => (props.changeScreen(1))} />
				<Text style={styles.h2}>Timetable: {username ?? "12x34567"}</Text>
			</View>
			<ScrollView style={styles.box2}>
				{days}
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
})
