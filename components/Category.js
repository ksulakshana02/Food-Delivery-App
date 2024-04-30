import React, { useEffect, useState } from "react";
import CategoryCard from "./CetegoryCard";
import { ScrollView } from "react-native";
const categoryList = require('../db/category.json');

const Category = () => {

    return(
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
            
            paddingHorizontal:15,
            paddingTop:15,
            columnGap:15,

        }}
        >

            {categoryList.categories.map((category, index) => {
                return(
                <CategoryCard
                imgUrl={category.icon}
                key={index}
                // keyExtractor={category => category.id}
                title={category.name}
                />
            )})}
        </ScrollView>
    );
}

export default Category;