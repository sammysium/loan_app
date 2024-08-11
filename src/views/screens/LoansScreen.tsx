import ILoan from "@models/ILoan";
import MainLayout from "@views/layouts/MainLayout";
import { FlatList, StyleSheet, View, TextInput, Image } from "react-native";
import useOrientation from "@hooks/useOrientation";
import { Text, useTheme } from "react-native-paper";
import { translator } from "@utils/translator";
import { NavigationProps } from "@config/routes";
import { globalStyles } from "@views/themes/styles";
import LoanCard from "@views/components/LoanCard";
import AppButton, { ButtonType } from "@views/components/AppButton";
import ApplyForLoanButton from "@views/components/ApplyForLoanButton";


interface IProps {
    navigation: NavigationProps
}

const data: ILoan[] = [
    { id: 1, name: "Loan 1", maximumAmount: 10, interestRate: 41 },
    { id: 2, name: "Loan 2", maximumAmount: 20, interestRate: 51 },
    { id: 3, name: "Loan 3", maximumAmount: 30, interestRate: 61 },
]

const LoansScreen: React.FC<IProps> = ({ navigation }) => {
    const { colors } = useTheme()

    const { isLandscape } = useOrientation()

    const renderItem = ({ item }: { item: ILoan }) => (
        <LoanCard loan={item} />
    );

    const renderAvaliableLoanTypes = () => {

        return <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={isLandscape ? 2 : 1}
            columnWrapperStyle={isLandscape ? styles.row : undefined}
            contentContainerStyle={styles.contentContainer}
        />
    }

    return <MainLayout navigation={navigation}>
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.box}>
                    <Text style={globalStyles.main_header}>{translator({ translationId: "loanApplicationDashboard" })}</Text>
                    <Text style={globalStyles.sub_header}>{translator({ translationId: "quickUnSecuredLoans" })}</Text>
                    <ApplyForLoanButton navigation={navigation}/>

                </View>

                <View style={styles.box}>
                    <Image
                        source={require('@assets/images/home.png')}
                        style={{ width: 150, height: 150 }}
                    />
                </View>
            </View>

            {renderAvaliableLoanTypes()}

        </View>
    </MainLayout>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10, // Adjust padding as needed
        height: "100%"
    },
    box: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    row: {
        justifyContent: 'space-between',
    },
    contentContainer: {
        flexGrow: 1,
    },
});

export default LoansScreen;