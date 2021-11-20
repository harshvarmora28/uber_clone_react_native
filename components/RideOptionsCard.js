import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavFavourites from "./NavFavourites";

const RideOptionsCard = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row`}>
          <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={[tw`pl-5 pr-24 rounded-full`, {marginTop: -10}]}>
              <Icon size={14} name="chevron-left" type="font-awesome" />
          </TouchableOpacity>
        <Text style={[tw`text-center py-5 text-xl`, { marginTop: -40 }]}>
          Select a Ride
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
