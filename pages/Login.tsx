import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import React, {useEffect, useState} from "react";
import storage from "../storage/storage";

import {Edulink} from "edulinkone-api";
import {Checkbox} from "expo-checkbox";

export let edulink: Edulink;

type loginProps = {
	changeScreen: React.Dispatch<React.SetStateAction<number>>,
	quickLog: {
		login: boolean,
		username: string,
		password: string,
		schoolId: string
	}
}

export default function Login(props: loginProps) {
	const [schoolId, onSetSchoolId] = useState("");
	const [username, onSetUser] = useState("");
	const [password, onSetPass] = useState("");
	const [remember, toggleRemember] = useState(false);

	if (props.quickLog.login) {
		console.warn(props);
		useEffect(()=> {
			async function login() {
				edulink = new Edulink(props.quickLog.schoolId, props.quickLog.username, props.quickLog.password, 2);
				await edulink.Authenticate();
				if (edulink.isAuthenticated) {
					props.changeScreen(1);
				}
			}
			login()
		})
		return null;
	} else {
		async function login() {
			let expires: number | null = (remember ? null : 120000);

			await storage.save({
				key: "loginData",
				data: {
					username: username,
					password: password,
					schoolId: schoolId
				},
				expires: expires
			});

			edulink = new Edulink(schoolId, username, password, 2);
			await edulink.Authenticate();
			if (edulink.isAuthenticated) {
				props.changeScreen(1);
			}

		}

		return (
			<View style={styles.container}>
				<Text style={styles.text}>Login</Text>
				<TextInput placeholder="School Id" style={styles.input} onChangeText={onSetSchoolId}></TextInput>
				<TextInput placeholder="Username" style={styles.input} onChangeText={onSetUser}></TextInput>
				<TextInput placeholder="Password" style={styles.input} textContentType="password" secureTextEntry={true} onChangeText={onSetPass}></TextInput>
				<View style={styles.checkboxContainer}>
					<Checkbox
					value={remember}
					onValueChange={toggleRemember}
					color={remember ? '#' : undefined}
					/>
					<Text>Remember me?</Text>
				</View>
				<View style={styles.button}>
					<Button title={"log in"} onPress={login} color={"#4285F4"}/>
				</View>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F2F2F2"
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
		width: "50%"
	},
	text: {
		fontSize: 50,
		paddingLeft: 55,
		paddingRight: 55,
		paddingBottom: 5
	},
	button: {
		width: "50%",
	},
	checkboxContainer: {
		height: "auto",
		flexDirection: "row",
		gap: 10,
		paddingBottom: 10,
		paddingTop: 5
	}
});