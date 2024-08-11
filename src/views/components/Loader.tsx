import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper"
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
    message: string
}

const Loader: React.FC<IProps> = ({message}) => {
    return <View style={styles.container}>
    <Icon name="error" size={50} color="red" style={styles.icon} />
    <Text style={styles.errorText}>{message}</Text>
  </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    icon: {
      marginBottom: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Loader;