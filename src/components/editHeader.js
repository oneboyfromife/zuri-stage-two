import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


const EditHeader = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.replace("/");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <TouchableOpacity onPress={handleBackPress}>
        <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize: 18}}>Edit CV</Text>
      <View></View>
    </View>
  );
}

export default EditHeader