import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createStackNavigator } from '@react-navigation/stack'; => エラーが発生する！
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Screen
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';


//const Stack = createStackNavigator(); => エラーが発生する！！
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// TabのHomeスタック
const HomeStack = ()=> {
  
  // Stack.Navigatorの世界
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ HomeScreen } options={ {headerShown: false} } />
      <Stack.Screen name="Article" component={ ArticleScreen } options={ {headerShown: false} } />
    </Stack.Navigator>
  );
  
};

// TabのClipスタック
const ClipStack = ()=> {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ ClipScreen } options={ { headerShown: false } } />
      <Stack.Screen name="Article" component={ ArticleScreen } options={ {headerShown: false} } />
    </Stack.Navigator>
  );
};

const screenOption = ( {route} :any ): any => {

  tabBarIcon: ( { focused, color, size }: any )=>{

    //console.log(route.name);

    let iconName: any;


    switch (route.name) {
      case "Home":
        iconName = 'home';
        break;
      case "Clip":
        iconName = 'bookmark';
        break;
    };

    //console.log(iconName);

    return <FontAwesome name={iconName} size={size} color={color} />;
  };

};


const AppNavigator = ()=> {

  return ( // Navigationの世界(ルーティング)
    <NavigationContainer>

      {/* タブの設定 */}
      <Tab.Navigator screenOptions={ screenOption } >
        <Tab.Screen name="Home" component={ HomeStack } />
        <Tab.Screen name="Clip" component={ ClipStack } />
      </Tab.Navigator>

    </NavigationContainer>
  );
};


export default AppNavigator;