import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useContext, useState} from "react";
import {DataContext} from "../src/context";
import {useRouter} from "expo-router";
import EditInput from "../src/components/EditInput";
import EditHeader from "../src/components/EditHeader";
import EditTextArea from "../src/components/EditTextArea";
import {TouchableOpacity} from "react-native-gesture-handler";
import { COLORS } from "../src/constants/theme";

const edit = () => {
  const {data, setData} = useContext(DataContext);
  const [newData, setNewData] = useState(data);
  const router = useRouter();

  return (
    <SafeAreaView>
      <EditHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View>
          <EditInput
            title="Full Name:"
            placeholder={data.name}
            value={newData.name}
            onChangeText={(val) => setNewData({...newData, name: val})}
          />
          <EditInput
            title="Contact"
            placeholder={data.phone}
            value={newData.phone}
            onChangeText={(val) => setNewData({...newData, phone: val})}
          />
          <EditInput
            title="Email Address"
            placeholder={data.email}
            value={newData.email}
            onChangeText={(val) => setNewData({...newData, email: val})}
          />
          <EditInput
            title="Address"
            placeholder={data.address}
            value={newData.address}
            onChangeText={(val) => setNewData({...newData, address: val})}
          />
          <EditInput
            title="Github Handle"
            placeholder={data.githubHandle}
            value={newData.githubHandle}
            onChangeText={(val) => setNewData({...newData, githubHandle: val})}
          />
          <EditInput
            title="Slack Handle"
            placeholder={data.slackHandle}
            value={newData.slackHandle}
            onChangeText={(val) => setNewData({...newData, slackHandle: val})}
          />
          <EditTextArea
            title="Bio"
            placeholder={data.bio}
            value={newData.bio}
            onChangeText={(val) => setNewData({...newData, bio: val})}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setData(newData);
              router.replace("/");
            }}
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
                fontSize: 18,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default edit;

const styles = StyleSheet.create({});
