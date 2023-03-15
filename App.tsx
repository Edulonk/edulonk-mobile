import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from "react";
import Screen from "./components/Screen";
import Login from "./pages/Login";
import Home from "./pages/Home";


export default function App() {
	const [screen, changeScreen] = useState(0);

	return (
		<View style={styles.container}>
			<Screen screen={screen}>
				<Login changeScreen={changeScreen} />
				<Home />
			</Screen>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		width: "100%",
	},
	box1: {
		width: "100%"
	}

});
