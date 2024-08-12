import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper"
import { ActivityIndicator } from 'react-native-paper';

interface IProps {
    message: string
}

const Loader: React.FC<IProps> = ({message}) => {
    return <View style={styles.container}>
      <ActivityIndicator animating={true} />
      <Text style={styles.text}>{message}</Text>
  </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      color: 'blue',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Loader;