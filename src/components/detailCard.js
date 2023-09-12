import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';

const DetailCard = ({title, value}) => {
  return (
    <View>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: COLORS.primary,
          marginBottom: 10,
          width: 80,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: 14,
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 16,
        }}
      >
        {value}
      </Text>
    </View>
  );
}

export default DetailCard

const styles = StyleSheet.create({})