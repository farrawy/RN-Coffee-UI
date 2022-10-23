import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.secondary,
            fontSize: 17,
            padding: 10,
            paddingLeft: 35,
          }}
          placeholder="Find your coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          name="search"
          color={colors.light}
          size={20}
          style={{
            position: "absolute",
            left: 10,
          }}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
