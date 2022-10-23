import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";

const avatar = require("../../assets/avatar.jpg");

const { width, height } = Dimensions.get("window");

const menu = require("../../assets/icons/menu.png");

const HomeScreen = ({ navigation }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.dark,
      }}
    >
      <ScrollView
        style={{ padding: 10, marginTop: Platform.OS === "android" && 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Menu Icon */}
          <TouchableOpacity
            style={{
              borderRadius: 10,
              overflow: "hidden",
              width: 40,
              height: 40,
            }}
          >
            <BlurView
              intensity={90}
              tint="dark"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image
                source={menu}
                style={{
                  width: 32,
                  height: 32,
                  tintColor: colors.light,
                }}
              />
            </BlurView>
          </TouchableOpacity>

          {/* Avatar */}
          <View
            style={{
              width: 40,
              height: 40,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <BlurView
              intensity={90}
              tint="dark"
              style={{ height: "100%", padding: 4 }}
            >
              <Image
                source={avatar}
                style={{ height: "100%", width: "100%", borderRadius: 10 }}
              />
            </BlurView>
          </View>
        </View>

        {/* Header */}
        <View style={{ width: "80%", marginVertical: 30 }}>
          <Text
            style={{ color: colors.white, fontSize: 35, fontWeight: "600" }}
          >
            Find the best coffee for you
          </Text>
        </View>

        {/* Search Field */}
        <SearchField />

        {/* Categories */}
        <Categories onChange={(id) => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees
            .filter((coffee) => {
              if (activeCategoryId === 1) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", { item: coffee })}
                key={coffee.id}
                style={{
                  width: width / 2 - 10 * 2,
                  marginBottom: 10,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <BlurView tint="dark" intensity={95} style={{ padding: 10 }}>
                  <View style={{ height: 150, width: "100%" }}>
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: 20,
                        borderTopEndRadius: 20,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{ flexDirection: "row", padding: 10 - 2 }}
                      >
                        <Ionicons
                          name="star"
                          color={colors.primary}
                          size={17}
                          style={{ marginLeft: 5 }}
                        />
                        <Text style={{ color: colors.white, margin: 5 }}>
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: 17,
                      marginBottom: 5,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.white, fontSize: 12 }}
                  >
                    {coffee.included}
                  </Text>

                  {/* Price */}
                  <View
                    style={{
                      marginVertical: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: 3,
                          fontSize: 16,
                        }}
                      >
                        $
                      </Text>
                      <Text style={{ color: colors.white, fontSize: 16 }}>
                        {coffee.price}
                      </Text>
                    </View>

                    {/* Add Button */}
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        padding: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Ionicons name="add" size={20} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
