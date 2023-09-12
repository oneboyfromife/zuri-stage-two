import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useContext} from "react";
import {DataContext} from "../src/context";
import {GetHeight, GetWidth} from "../src/utilities/dimension";
import {COLORS} from "../src/constants/theme";
import detailCard from "../src/components/detailCard";

const index = () => {
  const {data} = useContext(DataContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imgContact}>
          <View style={styles.imgWrapper}>
            <Image
              source={require("../assets/image/akintunde.jpg")}
              style={styles.img}
            />
          </View>
          <View
            style={{
              padding: 5,
              backgroundColor: COLORS.white,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Contact: {data.phone}
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >
              Email: {data.email}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: 10,
          }}
        >
          <detailCard title="Name" value={data.name} />
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <detailCard title="Address" value={data.address} />
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <detailCard title="Bio" value={data.bio} />
        </View>
        <socialCard slack={data.slackHandle} github={data.githubHandle} />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/edit" asChild>
          <Pressable
            style={{
              backgroundColor: COLORS.secondary,
              padding: 10,
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: GetFontSize(18),
              }}
            >
              Edit
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFC",
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  imgContact: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: GetWidth(80),
    height: GetHeight(80),
  },
  imgWrapper: {
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});
