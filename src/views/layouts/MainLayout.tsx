import { NavigationProps } from "@config/routes";
import useResponsiveScreen from "@hooks/useResponsiveScreen";

import Header from "@views/components/Header";
import { globalStyles } from "@views/themes/styles";

import { SafeAreaView, View } from "react-native";


interface IProps {
    navigation: NavigationProps,
    children: React.ReactNode
}



const MainLayout: React.FC<IProps> = ({ children, navigation }) => {


    const paddingHorizontal = useResponsiveScreen();

    return <SafeAreaView style={{ ...globalStyles.main_layout }}>

        <Header navigation={navigation} />
        <View style={{ ...globalStyles.main, paddingHorizontal: paddingHorizontal.horizontalPadding }}>
            {children}
        </View>

    </SafeAreaView>
}

export default MainLayout;