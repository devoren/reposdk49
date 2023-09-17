import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function HomeLayout() {
	return (
		<Stack initialRouteName="index">
			<Stack.Screen name="index" options={{}} />
			<Stack.Screen name="about" options={{}} />
		</Stack>
	);
}
