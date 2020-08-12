import * as React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideDrawer from '../components/side-drawer';
import Todo from '../screens/todo';
import Profile from '../screens/profile';
import AddTask from '../screens/todo/addTask';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default () => {

    const drawerOptions = (label, icon) => ({ drawerLabel: label, drawerIcon: () => <Icon name={icon} size={30} color="black" /> });

    const tabBarOptions = (label, Icon) => ({ tabBarLabel: label, tabBarIcon: () => <Ionicons activeColor="#fff" name={Icon} size={25} color={'white'} />, });

    const headerOptions = (navigation, title, isFirst) => ({
        headerStyle: { backgroundColor: '#4c7dbb', elevation: 0 },
        headerTintColor: 'white',
        headerTitle: title,
        headerLeft: () => <Icon style={{ marginLeft: 10, marginTop: 5, color: 'white' }} name={isFirst ? "ios-menu" : "ios-arrow-round-back"} size={30} color="white"
            onPress={() => {
                if (isFirst) navigation.toggleDrawer();
                else navigation.goBack();
            }} />
    });
    
    const TodoStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Todo" component={Todo} options={({ navigation }) => headerOptions(navigation, 'Todo List', 'isFirst')} />
            <Stack.Screen name="AddTask" component={AddTask} options={({ navigation }) => headerOptions(navigation, 'Add Task')} />
        </Stack.Navigator>
    );

    const ProfileStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={({ navigation }) => headerOptions(navigation, 'Profile', 'isFirst')} />
        </Stack.Navigator>
    );


    const TabNavigator = () => (
        <Tab.Navigator initialRouteName="TodoStack" barStyle={{ backgroundColor: '#4c7dbb' }}>
            <Tab.Screen name="TodoStack" component={TodoStack} options={() => tabBarOptions("Todo", "ios-paper")} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={() => tabBarOptions("Profile", "ios-contact")} />
        </Tab.Navigator>
    )

    return (
        <Drawer.Navigator drawerStyle={{ width: '75%' }} drawerContent={(props) => <SideDrawer {...props} />} initialRouteName="TabNavigator" screenOptions={{ unmountOnBlur: true }}>
            <Drawer.Screen name="TabNavigator" options={() => drawerOptions('Todo', 'ios-paper')} component={TabNavigator} />
        </Drawer.Navigator>
    );
}