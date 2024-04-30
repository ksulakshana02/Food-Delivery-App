import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Category from "../components/Category";
import Product from "../components/Product";


const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pt-4 pb-2">
                <View className="flex-row flex-1 items-center p-2 bg-gray-100 rounded-full border border-gray-100">
                    <TextInput placeholder="Search" className="ml-2 flex-1 p-1" />
                    <Icon.Search height="25" width="25" strokeWidth={2.5} stroke="gray" />
                </View>
                <View className="flex-row p-3 space-x-6">
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="black" />
                    <Icon.Bell height="20" width="20" strokeWidth={2.5} stroke="black" />
                </View>
            </View>
            <View className="flex-row items-center space-x-20 justify-center p-1.5">
                <View className="border border-gray-100 rounded-full px-4 py-1 bg-gray-100 ">
                    <Text>Foods</Text>
                </View>
                <View className="border border-gray-100 rounded-full px-4 py-1 bg-gray-100 ">
                    <Text>Drinks</Text>
                </View>
            </View>

            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
                <View>
                <Text className="pt-3 font-bold text-xl ml-4">Categories</Text>
                <Category />
                </View>

                <View>
                    <Text className="pt-4 font-bold text-xl ml-4">Food Items</Text>
                    <Product />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
}

export default HomeScreen;