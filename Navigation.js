import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import TabBar from './components/TabBar';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false 
        }}>
          <Stack.Screen name="Home" component={TabBar} />
          <Stack.Screen name="FoodDetails" component={FoodDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;