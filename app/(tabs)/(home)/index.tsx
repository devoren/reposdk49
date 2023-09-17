import React from "react";
import {
	Image,
	Text,
	ScrollView,
	View,
	useWindowDimensions,
	Button,
	FlatList,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { Link, router, useRouter } from "expo-router";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const Images = new Array(60).fill(1);

const FirstRoute = () => {
	const layout = useWindowDimensions();
	const router = useRouter();

	const renderItem = () => {
		return (
			<TouchableOpacity
				style={{
					width: layout.width / 2,
				}}
			>
				<Image
					source={{
						uri: `https://random.imagecdn.app/400/400?${Math.random()}`,
					}}
					style={{
						width: layout.width / 2,
						height: layout.width / 2,
					}}
				/>
				<Pressable style={{ flexDirection: "row" }}>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</Text>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</Text>
				</Pressable>
				<Text style={{ fontSize: 15, color: "red" }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<Text>index.js :</Text>
			<Button title="Go about" onPress={() => router.push("/about")} />
			<FlatList
				data={Images}
				ListHeaderComponent={
					<Image
						source={{
							uri: `https://random.imagecdn.app/1200/400?${Math.random()}`,
						}}
						style={{
							width: layout.width,
							height: layout.width / 2,
						}}
					/>
				}
				renderItem={renderItem}
				keyExtractor={(_, i) => i.toString()}
			/>
		</View>
	);
};

const SecondRoute = () => {
	const layout = useWindowDimensions();
	const router = useRouter();

	const renderItem = () => {
		return (
			<TouchableOpacity
				style={{
					width: layout.width / 2,
				}}
			>
				<Image
					source={{
						uri: `https://random.imagecdn.app/400/400?${Math.random()}`,
					}}
					style={{
						width: layout.width / 2,
						height: layout.width / 2,
					}}
				/>
				<Pressable style={{ flexDirection: "row" }}>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</Text>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit.
					</Text>
				</Pressable>
				<Text style={{ fontSize: 15, color: "red" }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.Lorem ipsum dolor sit amet, consectetur adipisicing
					elit.
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ flex: 1 }}>
			<Text>index.js :</Text>
			<Button title="Go about" onPress={() => router.push("/about")} />
			<FlatList
				data={Images}
				ListHeaderComponent={
					<Image
						source={{
							uri: `https://random.imagecdn.app/1200/400?${Math.random()}`,
						}}
						style={{
							width: layout.width,
							height: layout.width / 2,
						}}
					/>
				}
				renderItem={renderItem}
				keyExtractor={(_, i) => i.toString()}
			/>
		</View>
	);
};

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	screen1: SecondRoute,
	screen2: SecondRoute,
	screen3: SecondRoute,
	screen4: SecondRoute,
	screen5: SecondRoute,
	screen6: SecondRoute,
	screen7: SecondRoute,
});

export default function About() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "First" },
		{ key: "second", title: "Second" },
		{ key: "screen1", title: "Screen 1" },
		{ key: "screen2", title: "Screen 2" },
		{ key: "screen3", title: "Screen 3" },
		{ key: "screen4", title: "Screen 4" },
		{ key: "screen5", title: "Screen 5" },
		{ key: "screen6", title: "Screen 6" },
		{ key: "screen7", title: "Screen 7" },
	]);

	return (
		<TabView
			renderTabBar={(props) => (
				<TabBar {...props} tabStyle={{ width: "auto" }} scrollEnabled />
			)}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}
