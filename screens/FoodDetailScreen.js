import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Product from "../components/Product";
import Category from "../components/Category";

const FoodDetailScreen = ({ route, navigation }) => {
    const { id, imgUrl, name, rating, price, reviews, category, description } = route.params;
    return (
        <SafeAreaView className="bg-white">
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}>
            <View className="relative">
                <Image source={{ uri: imgUrl }} className="w-full h-56 bg-gray-300 p-4 rounded-b-xl" />
                <TouchableOpacity
                    className="absolute top-5 left-5 p-2 bg-white rounded-full"
                    onPress={() => navigation.goBack(null)}>
                    <Icon.ArrowLeft height="20" width="20" color="black" strokeWidth={2.5} />
                </TouchableOpacity>
                <TouchableOpacity
                    className="absolute top-5 right-20 p-2 bg-white rounded-full">
                    <Icon.Heart height="20" width="20" color="black" strokeWidth={2.5} />
                </TouchableOpacity>
                <TouchableOpacity
                    className="absolute top-5 right-5 p-2 bg-white rounded-full">
                    <Icon.Share2 height="20" width="20" color="black" strokeWidth={2.5} />
                </TouchableOpacity>
                
                    <View className="px-4 pt-2">
                        <Text className="text-3xl font-bold capitalize">{name}</Text>
                        <View className="flex-row space-x-2 my-0 justify-between">
                            <Text className="capitalize text-gray-700">{description}</Text>
                            <Text className="text-3xl text-gray-500 pb-1 font-bold">{price}</Text>
                        </View>

                        <View className="flex-row justify-between pt-3">
                            <View className="flex-row">
                                <Icon.Star color="orange" fill={"orange"} opacity={0.5} height="20" width="20"/>
                                <Text className="text-black font-bold pl-2">{rating}</Text>
                            </View>
                            <View className="flex-row">
                                <Icon.Truck color="black" opacity={0.5} height="20" width="20"/>
                                <Text className="text-black font-bold pl-2">1 Km</Text>
                            </View>
                            <View className="flex-row">
                                <Icon.Clock color="black" opacity={0.5} height="20" width="20"/>
                                <Text className="text-black font-bold pl-2">38 Mins</Text>
                            </View>
                            <View className="flex-row">
                                <Icon.PieChart color="black" opacity={0.5} height="20" width="20"/>
                                <Text className="text-black font-bold pl-2">{reviews}</Text>
                            </View>
                        </View>
                        <Text className="p-3">Italian Pizza Dough, Original Italian Tomato sauce, Mozzarella Cheese, BBQ Chicken, Onion, Kochchi Sausage, Capsicum, BBQ Sauce</Text>
                        <Text className="p-3">Italian Pizza Dough, Original Italian Tomato sauce, Mozzarella Cheese, BBQ Chicken, Onion, Kochchi Sausage, Capsicum, BBQ Sauce</Text>
                        
                        <View>
                            <Text className="pt-4 font-bold text-xl ml-4">Most Popular</Text>
                            <Product />
                        </View>
                    </View>
                    

                


            </View>
            </ScrollView>
            <TouchableOpacity
                className="bg-black p-1.5 mx-6  shadow-xl inset-x-0 bottom-4 absolute">
                <Text className="text-center text-white text-lg font-bold">Add to cart</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
export default FoodDetailScreen;