import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Confirmation } from "../screens/Confirmation";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { StepOne } from "../screens/SignUp/StepOne";
import { StepTwo } from "../screens/SignUp/StepTwo";

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes () {
    return(
        <Navigator screenOptions={{headerShown: false}} initialRouteName='Splash'>
            <Screen name="Splash" component={Splash}/>
            <Screen name="SignIn" component={SignIn}/>
            <Screen name="StepOne" component={StepOne}/>
            <Screen name="StepTwo" component={StepTwo}/>
            <Screen name="Confirmation" component={Confirmation}/>
        </Navigator>
    )
}