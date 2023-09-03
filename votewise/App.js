// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen  from './screens/HomeScreen';
import RepresentativeScreen from './screens/RepresentativeScreen';
import SenatorScreen from './screens/SenatorScreen';
import PresidentScreen from './screens/PresidentScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsPage from '../votewise/screens/DatailsPage'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Default'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name='DetailsPage'
        component={DetailsPage}
        options={{ title: "President Details Page" }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'PresidentScreen') {
            iconName = focused ? 'users' : 'users';
          } else if (route.name === 'RepresentativeScreen') {
            iconName = focused ? 'users' : 'users';
          } else if (route.name === 'SenatorScreen') {
            iconName = focused ? 'users' : 'users';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#c0032c',
        tabBarInactiveTintColor: '#002368',
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='RepresentativeScreen' component={RepresentativeScreen} />
      <Tab.Screen name='SenatorScreen' component={SenatorScreen} />
      <Tab.Screen name='PresidentScreen' component={PresidentScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
