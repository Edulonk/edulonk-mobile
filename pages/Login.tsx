import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import React, {useState} from "react";
import storage from "../storage/storage";
import {Edulink} from "edulinkone-api";


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

	async function login() {
		await storage.save({
			key: 'username',
			data: {
				user: username
			},
			expires: null
		});
		await storage.save({
			key: 'password',
			data: {
				pass: password
			},
			expires: null
		});
		await storage.save({
			key: 'schoolId',
			data: {
				sch: schoolId
			},
			expires: null
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
			<View style={styles.button}>
				<Button title={"log in"} onPress={login} color={"#4285F4"}/>
			</View>
		</View>
	)
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
	}
});