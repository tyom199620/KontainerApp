import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/screens/Home";
import Help from "../components/screens/Help";
import Events from "../components/screens/Events";
import Messages from "../components/screens/Messages";
import MyApplications from "../components/screens/MyApplications";
import MyProfile from "../components/screens/MyProfile";
import Offers from "../components/screens/Offers";
import Participants from "../components/screens/Participants";
import Polls from "../components/screens/Polls";
import SingleParticipant from "../components/screens/SingleParticipant";

const Stack = createNativeStackNavigator();


class MainNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Help" component={Help}/>
                    <Stack.Screen name="Events" component={Events}/>
                    <Stack.Screen name="Messages" component={Messages}/>
                    <Stack.Screen name="MyApplications" component={MyApplications}/>
                    <Stack.Screen name="MyProfile" component={MyProfile}/>
                    <Stack.Screen name="Offers" component={Offers}/>
                    <Stack.Screen name="Participants" component={Participants}/>
                    <Stack.Screen name="Polls" component={Polls}/>
                    <Stack.Screen name="SingleParticipant" component={SingleParticipant}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default MainNavigation;
