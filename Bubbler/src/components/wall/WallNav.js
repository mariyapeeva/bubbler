import React from 'react';
import { pure } from 'recompose'
import Ionicons from 'react-native-vector-icons/Ionicons' 
Ionicons.loadFont()

import { createStackNavigator } from '@react-navigation/stack';

import { Search } from '../search' 

import Wall from './Wall' 

const Stack = createStackNavigator();

const WallNav = () => {

	return(
	 	<Stack.Navigator 
	 		initialRouteName="Wall"
	 		screenOptions={{
				headerStatusBarHeight: 39,
	    		headerStyle: { height: 91 },
	    		headerTransparent: true
			}} >
	 		<Stack.Screen 
	    		name="Wall" 
	    		component={Wall} 
	    		options={{ title: 'Wall' }} 
	    		/>
	    	<Stack.Screen 
	    		name="Search" 
	    		component={ Search }
	    		options={{ 
	    			title: 'Search'
	    		}}
	    	/>

	  	</Stack.Navigator>
	)
}
export default WallNav
