import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icon from "react-native-feather";
import HomeScreen from "../screens/HomeScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import OrdersScreen from "../screens/OrdersScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return ( 
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#a8a8a8',
            tabBarLabelStyle:{
                fontSize: 12,
                textTransform: 'capitalize',
                padding:10,
                fontWeight:'bold',
                bottom:5
                
            },
            tabBarStyle: {
                position:'absolute',
                height:70,
                elevation:0,
                backgroundColor: '#ffffff',
                borderRadius:20,
                padding:20
            }
        }}
        tab>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color}) => (
                        <Icon.Home color={color} height='25' width='25' strokeWidth={2.5} />
                    )
                }}
                />
            <Tab.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                    tabBarIcon: ({ color}) => (
                        <Icon.Coffee color={color} height='25' width='25' strokeWidth={2.5} />
                    )
                }}
                />
            <Tab.Screen
            name="Order"
            component={OrdersScreen}
            options={{
                tabBarIcon: ({ color}) => (
                    <Icon.PlusCircle color={color} height='25' width='25' strokeWidth={2.5} />
                )
            }}
            />
            <Tab.Screen 
            name="Cart"
            component={CartScreen}
            options={{
                tabBarIcon: ({ color}) => (
                    <Icon.ShoppingCart color={color} height='25' width='25' strokeWidth={2.5} />
                )
            }}
            />
            <Tab.Screen
            name="Profile"
            component={AccountScreen}
            options={{
                tabBarIcon: ({ color}) => (
                    <Icon.User color={color} height='25' width='25' strokeWidth={2.5} />
                )
            }}
            />

        </Tab.Navigator>
     );
}
 
export default TabBar;
