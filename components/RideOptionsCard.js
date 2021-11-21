import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavFavourites from "./NavFavourites";
import { Image } from "react-native-elements/dist/image/Image";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
    price: "₹3899"
  },
  {
    id: "Uber-XL-124",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
    price: "₹4699"
  },
  {
    id: "Uber-LUX-125",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
    price: "₹6799"
  }
]

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row`}>
          <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={[tw`pl-5 pr-24 rounded-full`, {marginTop: -10}]}>
              <Icon size={14} name="chevron-left" type="font-awesome" />
          </TouchableOpacity>
        <Text style={[tw`text-center -ml-7 py-5 text-xl`, { marginTop: -40 }]}>
          Select a Ride - 285 km
        </Text>
      </View>
      <FlatList
      style={tw`-mt-4`}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item: {id, title, multiplier, image, price}, item }) => (
        <TouchableOpacity
        onPress={() => setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 -mt-3 ${id === selected ?.id && "bg-gray-200"}`}
        >
          <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{ uri: image }}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl text-center font-semibold`}>{title}</Text>
            <Text style={tw`text-center`}>5 hr 12 min</Text>
          </View>
          <Text style={tw`text-xl`}>{price}</Text>
        </TouchableOpacity>
      )}
      />
      <View style={tw`items-center`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black w-60 rounded-full py-2 mb-6 ml-4 mr-4 ${!selected && "bg-gray-300"}` }>
          <Text
          style={tw`text-center text-xl text-white`}
          >Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
