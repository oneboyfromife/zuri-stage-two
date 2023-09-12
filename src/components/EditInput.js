import {TextInput, View, Text} from "react-native";
import {COLORS} from "../constants/theme";

const EditInput = ({title, value, onChangeText, placeholder}) => {
  return (
    <View style={{width: "100%", paddingVertical: 5, marginBottom: 5}}>
      <Text style={{fontSize: 12, marginBottom: 7, color: COLORS.primary}}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.primary,
          padding: 5,
          fontSize: 16,
          fontWeight: "bold",
        }}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default EditInput;
