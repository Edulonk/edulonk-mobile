import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {edulink} from "./Login";

export function Homework() {
	let [homework, setHomework] = useState("");
	useEffect(() => {
		async function getHomework() {
			let data = await edulink.getCurrentHomework();
			setHomework(data.toString());
		}
		getHomework();
	}, [])


	return (
		<View>
			<Text> {homework} </Text>
		</View>
	)
}