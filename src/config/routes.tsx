import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoansScreen from '@views/screens/LoansScreen';

type RootStackParamList = {
    Loans: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Loans'>;


const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = () => {
    return <>
        <Stack.Navigator initialRouteName="Loans">
            <Stack.Screen name="Loans" component={LoansScreen} options={{
                headerShown: false
            }} />
           
        </Stack.Navigator>
    </>
}

export default routes;


