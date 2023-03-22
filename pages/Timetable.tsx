import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {edulink} from "./Login";
import {Week} from "edulinkone-api/build/types/result";

export default function Timetable() {
	let [timetable, setTimetable] = useState(null);
	useEffect(() => {
		async function getTimetable() {
			const result = await edulink.getThisWeek();
			// @ts-ignore
			setTimetable(`${result.days}`);
		}

		getTimetable()
	})

	return (
		<View style={styles.container}>
			<Text > timetable </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	}
})
