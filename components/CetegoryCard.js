import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({imgUrl,title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{ uri: imgUrl }}
        className="h-10 w-10 rounded-md justify-center"
        onError={(error) => console.error("Error loading image:", error)}
      />
      <Text className="pt-1 text-black">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;