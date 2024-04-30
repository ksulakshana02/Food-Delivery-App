import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import * as Icon from "react-native-feather";

const ProductCard = ({ id, imgUrl, name, rating, price, reviews, category, description }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('FoodDetails', {
                    id, imgUrl, name, rating, price, reviews, category, description
                });
            }}
            className="bg-white shadow-lg rounded-3xl mx-3 my-4 flex flex-wrap  "
        >
            <Image
                source={{ uri: imgUrl }}
                style={{ width: "100%", height: 130 }}
                className=" rounded-3xl"
            />
            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <Icon.Heart height="20" width="20" color="pink" />
            </TouchableOpacity>
            <View className="px-3 pb-1 ">
                <Text className="font-bold text-xl pt-2 capitalize">{name}</Text>
                <View className="flex-row justify-between">
                    <Text className="text-sm capitalize" >{description}</Text>
                    <Text className="text-grey-500 pr-2 capitalize">{category}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-2xl text-gray-500">{price}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Icon.Star color="green" opacity={0.5} height="15" width="15" />
                        <Text className="text-green-500 ">{rating} . <Text className="text-grey-500 ">{reviews} Reviews</Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;