import { KeyboardTypeOptions, TextInput, TextStyle, View } from "react-native";
import { HelperText, Text } from "react-native-paper";


interface IProps {
    placeHolderText?: string;
    placeHolderTextColor?: string;
    label: string;
    labelStyle?: TextStyle,
    onChange: (value: string) => void,
    errorMessage?: string
    testId?: string,
    keyboardType?: KeyboardTypeOptions
}

const TextEntry: React.FC<IProps> = ({ placeHolderText = "", keyboardType = "default" ,label, testId="testId", errorMessage = null, onChange, placeHolderTextColor, labelStyle }) => {
    return <View style={{ flexDirection: 'column', marginBottom: 10 }}>
        {label && <Text style={{marginBottom: 5, ...labelStyle}}>{label}</Text>}
        <TextInput
            testID={testId}
            style={{ borderWidth: 1, borderColor: 'blue', padding: 8, borderRadius: 4 }}
            placeholderTextColor={placeHolderTextColor}
            placeholder={placeHolderText ? placeHolderText : label}
            onChangeText={(v: string) => onChange(v)}
            keyboardType={keyboardType}
        />
        {errorMessage && (<HelperText type="error" ><Text>{errorMessage}</Text></HelperText>)}
    </View>
}

export default TextEntry;