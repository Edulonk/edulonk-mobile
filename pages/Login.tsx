import {StyleSheet, Text, View, TextInput, ButtonProps} from "react-native";
import React from "react";
import Button from "../components/Button";

let loginButtonProps: ButtonProps = {
	title: "Log In"
}

export default function Login() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login</Text>
			<TextInput placeholder="Username" style={styles.input}></TextInput>
			<TextInput placeholder="Password" style={styles.input}></TextInput>
			<Button button={loginButtonProps} style={styles.button}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: "center",
	},
	input: {
		borderStyle: "solid",
		borderColor: "#000000",
		borderRadius: 7,
		borderWidth: 2,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		margin: 5,
	},
	text: {
		fontSize: 50,
		paddingLeft: 55,
		paddingRight: 55,
		paddingBottom: 5
	},
	button: {
		width: "50%",
	}
});