import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import ProductCard from "./ProductCard";
const productData = require('../db/products.json');

const Product = () => {
    return(
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop:8,
                
                }}   
            >
                
                {productData.products.map((product) => {
                    console.log(product)
                    return <ProductCard 
                    key={product.id}
                    imgUrl={product.image}
                    name={product.name}
                    rating={product.rating}
                    price={product.price}
                    reviews={product.reviews}
                    category={product.category}
                    description={product.description}
                    />
                
                })}
            </ScrollView>
        </View>
    )
}

export default Product;