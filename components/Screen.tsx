import React from "react";
import {Text, View} from "react-native";

export type ScreenParams = {
	screen: number,
	changeScreen: React.Dispatch<React.SetStateAction<number>>,
	children?: React.ReactNode[]
}

export default function Screen(props: ScreenParams) {
	return (
		<View>
			{ props.children != null ? props.children[props.screen] :  <Text> Error </Text>}
		</View>
	)
}