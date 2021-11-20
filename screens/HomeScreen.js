import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env"
import NavFavourites from "../components/NavFavourites";
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
const HomeScreen = () => {

  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            marginBottom: -16
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18
          }
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en"
        }}
        placeholder="Where From?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
        <NavOptions/>
        {/* <NavFavourites/> */}
      </View>
      <View style={tw`h-1/2`}>
                <Stack.Navigator>
                   <Stack.Screen
                    name="NavigateCard"
                    component={NavigateCard}
                    options={{
                        headerShown: false
                    }}
                   />
                   <Stack.Screen
                    name="RideOptionsCard"
                    component={RideOptionsCard}
                    options={{
                        headerShown: false
                    }}
                   />
                </Stack.Navigator>
            </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
