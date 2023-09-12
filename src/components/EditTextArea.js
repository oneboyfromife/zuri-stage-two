import {TextInput, View, Text} from "react-native";
import {COLORS} from "../constants/theme";

const EditTextArea = ({title, value, onChange, placeholder}) => {
  return (
    <View style={{width: "100%", paddingVertical: 5, marginBottom: 5}}>
      <Text style={{fontSize: 12, marginBottom: 7, color: COLORS.primary}}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={4}
        style={{
          borderWidth: 0.5,
          borderColor: COLORS.primary,
          padding: 5,
          fontSize: 16,
          fontWeight: "bold",
        }}
      />
    </View>
  );
};

export default EditTextArea;
