import React from "react";
import {StyleSheet, Text, View} from "react-native";

export type ScreenParams = {
	screen: number,
	children?: React.ReactNode[]
}

export default function Screen(props: ScreenParams) {
	return (
		<View style={styles.screen}>
			{ props.children != null ? props.children[props.screen] :  <Text> Error </Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		height: "100%",
		width: "100%"
	}
})