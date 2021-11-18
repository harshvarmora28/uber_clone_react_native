import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from "tailwind-react-native-classnames";



const data = [
    {
        id: "100",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "101",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen" // Not working
    } 
];

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-36`}>
                <View>
                    <Image
                    style={{ width: 96, height: 96, resizeMode: "contain"}}
                    source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions
