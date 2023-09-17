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
						Lorem ipsum dolor sit amet
					</Text>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet
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
				keyExtractor={(_, i) => new Date().toString() + i}
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
						Lorem ipsum dolor sit amet
					</Text>
					<Text style={{ fontSize: 15, color: "red" }}>
						Lorem ipsum dolor sit amet
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
	third: SecondRoute,
});

export default function About() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "first", title: "First" },
		{ key: "second", title: "Second" },
		{ key: "third", title: "Third" },
	]);

	return (
		<TabView
			renderTabBar={(props) => <TabBar {...props} />}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
}
