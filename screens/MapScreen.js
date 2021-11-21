import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View>
        <TouchableOpacity style={tw`bg-gray-100 absolute left-20 top-20 m-36  p-3 w-14 rounded-full shadow-lg`}>
                <Icon name="menu"/>
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                   {/* <Stack.Screen
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false
                    }}
                   /> */}
                   <Stack.Screen
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown: false
                    }}
                   />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
