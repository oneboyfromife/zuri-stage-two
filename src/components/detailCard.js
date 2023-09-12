import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailCard = ({title, value}) => {
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