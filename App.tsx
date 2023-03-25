import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from "react";
import Screen from "./components/Screen";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import {Homework} from "./pages/Homework";

import {AppRegistry} from "react-native";
AppRegistry.registerHeadlessTask('homework', () => require('./tasks/getHomework'))

export default function App() {
	const [screen, changeScreen] = useState(0);

	return (
		<View style={styles.container}>
			<Screen screen={screen}>
				<Login changeScreen={changeScreen} />
				<Home changeScreen={changeScreen} />
				<Timetable changeScreen={changeScreen} />
				<Homework changeScreen={changeScreen} />
			</Screen>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: "100%",
		backgroundColor: "#F2F2F2"
	},
	box1: {
		width: "100%"
	}

});
