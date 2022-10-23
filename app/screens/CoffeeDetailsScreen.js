import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  RefreshControl,
  Platform,
  Button,
  Image,
} from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import SPACING from "../config/SPACING";

const { width, height } = Dimensions.get("window");

const sizes = ["S", "M", "L"];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const iosPlatform = Platform.OS === "ios";

const coffeeBean = require("../../assets/icons/coffee-bean.png");
const star = require("../../assets/icons/star.png");

const CoffeeDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [activeSize, setActiveSize] = useState("S");
  const [activeSizePrice, setActiveSizePrice] = useState(item.price);
  const [refreshing, setRefreshing] = useState(false);
  const [favorites, setFavorites] = useState(false);

  console.log(activeSizePrice);

  // console.log(iosPlatform);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
      >
        <ImageBackground
          source={item.image}
          style={{
            height: height / 1.78 + 10,
            justifyContent: "space-between",
          }}
          imageStyle={{ borderRadius: 30 }}
        >
          {/* Top Icons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              marginTop: iosPlatform
                ? StatusBar.currentHeight + 30
                : StatusBar.currentHeight - 10,
            }}
          >
            {/* Back Arrow */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: colors.dark,
                padding: 10,
                borderRadius: 15,
              }}
            >
              <AntDesign name="left" color={colors.light} size={25} />
            </TouchableOpacity>

            {/* Favourite Icon */}
            <TouchableOpacity
              onPress={() => setFavorites(!favorites)}
              style={{
                backgroundColor: colors.dark,
                padding: 10,
                borderRadius: 15,
              }}
            >
              <Ionicons
                name="heart"
                color={favorites === false ? colors.light : colors.primary}
                size={24}
              />
            </TouchableOpacity>
          </View>

          {/* Bottom  */}
          <View
            style={{
              borderRadius: 30,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={100}
              tint="dark"
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: colors.white,
                    fontWeight: "600",
                    // marginBottom: 3,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors["white-smoke"],
                    fontWeight: "500",
                    marginBottom: 10,
                  }}
                >
                  {item.included}
                </Text>

                {/* Rating */}
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={star}
                    style={{ width: 20, height: 20, tintColor: colors.primary }}
                  />
                  <Text
                    style={{
                      color: colors.white,
                      marginLeft: 10,
                      fontSize: 17,
                      fontWeight: "600",
                    }}
                  >
                    {item.rating}
                  </Text>
                </View>
              </View>

              {/*  */}
              <View
                style={{
                  width: "35%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: colors.dark,
                      borderRadius: 10,
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={coffeeBean}
                      style={{
                        width: 20,
                        height: 20,
                        tintColor: colors.primary,
                      }}
                    />
                    <Text
                      style={{
                        color: colors["white-smoke"],
                        fontSize: 10,
                      }}
                    >
                      Coffee
                    </Text>
                  </View>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: colors.dark,
                      borderRadius: 10,
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="water" color={colors.primary} size={20} />
                    <Text
                      style={{
                        color: colors["white-smoke"],
                        fontSize: 10,
                      }}
                    >
                      Milk
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: colors.dark,
                    padding: 5,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 7,
                  }}
                >
                  <Text
                    style={{
                      color: colors["white-smoke"],
                      fontSize: 13,
                    }}
                  >
                    Medium roasted
                  </Text>
                </View>
              </View>
            </BlurView>
          </View>
        </ImageBackground>

        {/*  */}
        <View style={{ padding: SPACING * 1.3 }}>
          <Text
            style={{
              color: colors["white-smoke"],
              fontSize: 17,
              marginBottom: 15,
            }}
          >
            Description
          </Text>
          <Text style={{ color: colors.white }}>{item.description}</Text>

          {/*  */}
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: 17,
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              Size
            </Text>

            {/*  */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {sizes.map((size, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setActiveSize(size);
                    switch (size) {
                      case "S":
                        setActiveSizePrice(item.price);
                        break;
                      case "M":
                        setActiveSizePrice(item.mPrice);
                        break;
                      case "L":
                        setActiveSizePrice(item.lPrice);
                        break;
                      default:
                        setActiveSizePrice(item.price);
                        break;
                    }
                  }}
                  style={[
                    {
                      borderWidth: 2,
                      paddingVertical: 5,
                      borderRadius: 10,
                      backgroundColor: colors["dark-light"],
                      width: width / 3 - 20,
                      alignItems: "center",
                    },
                    activeSize == size && {
                      borderColor: colors.primary,
                      backgroundColor: colors.dark,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Text
                    style={[
                      { color: colors["white-smoke"], fontSize: 19 },
                      activeSize === size && {
                        color: colors.primary,
                      },
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/*  */}
      <SafeAreaView style={{ flexDirection: "row" }}>
        <View
          style={{
            padding: SPACING * 1.3,
            width: "30%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors["white-smoke"],
              fontSize: 15,
            }}
          >
            Price
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: colors.primary, fontWeight: "700", fontSize: 20 }}
            >
              $
            </Text>
            <Text
              style={{
                color: colors.white,
                fontWeight: "700",
                fontSize: 20,
                marginLeft: 5,
              }}
            >
              {activeSizePrice}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "70%",
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
