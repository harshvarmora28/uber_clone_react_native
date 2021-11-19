import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "100",
        icon: "home",
        location: "Home",
        destination: "Adajan, Surat, Gujarat"
    },
    {
        id: "101",
        icon: "briefcase",
        location: "Study",
        destination: "PDEU, Gandhinagar, Gujarat"
    }
]

const NavFavourites = () => {
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
            )}
            renderItem={({item: {location, destination, icon}}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`} 
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
