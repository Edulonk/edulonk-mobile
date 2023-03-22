import {edulink} from "../../pages/Login";
import {Text, View} from "react-native";
import {useEffect, useState} from "react";

export default function Lesson() {
	let [timetable, setTimetable] = useState(null);
	useEffect(() => {
		async function getTimetable() {
			const result = await edulink.getToday();
			// @ts-ignore
			setTimetable(`${result.periods[0]}`);
		}

		getTimetable()
	})

	return (
		<View>
			<Text></Text>
		</View>
	)
}