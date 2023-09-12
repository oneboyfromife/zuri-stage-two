import {SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, View} from "react-native";
import React, {useContext, useState} from "react";
import {DataContext} from "../src/context";
import {useRouter} from "expo-router";
import EditInput from "../src/components/EditInput";
import EditHeader from "../src/components/EditHeader";
import EditTextArea from "../src/components/EditTextArea";
import {TouchableOpacity} from "react-native-gesture-handler";

const edit = () => {
  const {data, setData} = useContext(DataContext);
  const [updatedData, setUpdatedData] = useState(data);
  const router = useRouter();

  const handleBackPress = () => {
    router.replace("/");
  };

  function showToast() {
    ToastAndroid.show("Saved", ToastAndroid.SHORT);
  }

  return (
    <SafeAreaView>
      <EditHeader />

      <ScrollView showsVerticalScrollIndicator={false} style={{
        paddingVertical: 20,
        paddingHorizontal: 10
        
      }}>
        <View>
          <EditInput
            title="Full Name:"
            placeholder={data.name}
            value={newData.name}
            onChangeText={(val) => setNewDetails({...newData, name: val})}
          />
          <EditInput
            title="Contact"
            placeholder={data.phone}
            value={newData.phone}
            onChangeText={(val) => setNewDetails({...newData, phone: val})}
          />
          <EditInput
            title="Email Address"
            placeholder={data.email}
            value={newData.email}
            onChangeText={(val) => setNewDetails({...newData, email: val})}
          />
          <EditInput
            title="Contact"
            placeholder={data.phone}
            value={newData.phone}
            onChangeText={(val) => setNewDetails({...newData, phone: val})}
          />
          <EditInput
            title="Address"
            placeholder={data.address}
            value={newData.address}
            onChangeText={(val) => setNewDetails({...newData, address: val})}
          />
          <EditInput
            title="Github Handle"
            placeholder={data.githubHandle}
            value={newData.githubHandle}
            onChangeText={(val) =>
              setNewDetails({...newData, githubHandle: val})
            }
          />
          <EditInput
            title="Slack Handle"
            placeholder={data.slackHandle}
            value={newData.slackHandle}
            onChangeText={(val) =>
              setNewDetails({...newData, slackHandle: val})
            }
          />
          <EditTextArea
            title="Bio"
            placeholder={data.bio}
            value={newData.bio}
            onChangeText={(val) => setNewDetails({...newData, bio: val})}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={[handleBackPress, showToast]}
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
