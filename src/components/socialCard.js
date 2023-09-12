import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';

const socialCard = ({slack, github}) => {
  return (
    <View>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: COLORS.primary,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 14,
          }}
        >
          Socials
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons name="logo-slack" size={20} color={COLORS.primary} />
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 16,
            marginLeft: 5,
          }}
        >
          {slack}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons name="logo-github" size={20} color={COLORS.primary} />
        <Text
          style={{
            color: COLORS.primary,
            fontSize: 16,
            marginLeft: 5,
          }}
        >
          {github}
        </Text>
      </View>
    </View>
  );
}

export default socialCard

const styles = StyleSheet.create({})