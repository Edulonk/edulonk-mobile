import {
	Button as ReactButton,
	ButtonProps as ReactButtonProps,
	View,
	ViewStyle
} from "react-native";

type ButtonProps = {
	style: ViewStyle,
	button: ReactButtonProps
}

export default function Button(props: ButtonProps) {
	return(
		<View style={props.style}>
			<ReactButton title={props.button.title} />
		</View>
	)
}