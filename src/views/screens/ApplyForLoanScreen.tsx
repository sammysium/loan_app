import ILoan from "@models/ILoan";
import MainLayout from "@views/layouts/MainLayout";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { translator } from "@utils/translator";
import { useState } from "react";
import { NavigationProps } from "@config/routes";
import { globalStyles } from "@views/themes/styles";
import ILoanApplication from "@models/ILoanApplication";
import { validateLoanApplicationData } from "@validations/loanApplicationValidator";
import ServiceLoans from "@services/ServiceLoans";
import GenericFormErrorFields from "@models/GenericFormErrorFields";
import TextEntry from "@views/components/TextEntry";
import AppButton, { ButtonType } from "@views/components/AppButton";
import Spacer from "@views/components/Spacer";
import { useStore } from "@store/useStore";

interface IProps {
    navigation: NavigationProps
}

const ApplyForLoanScreen: React.FC<IProps> = ({ navigation }) => {
    
    const { colors } = useTheme()
    const [errors, setFormErrors] = useState<GenericFormErrorFields>({})
    const [loading, setLoading] = useState(false)
    const [loanApplicationData, setLoanApplicationData] = useState<ILoanApplication>(
        {
            full_name: "",
            email: "",
            loan_amount: 0,
            loan_purpose: ""
        }
    )

    const handleEntries = (fieldName: string, value: string | number) => {
        setLoanApplicationData({
            ...loanApplicationData, [fieldName]: value
        })
    }


    const submitData = async () => {
        setLoading(true)
        //validate it all first
        const validationErrors = validateLoanApplicationData(loanApplicationData, {id: 1, name: "", maximumAmount: 100, interestRate: 3})
        console.log('---- error --- ', validationErrors)
        setFormErrors(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            // send the loan application
            try {
                const result = await ServiceLoans.submitNewLoan(loanApplicationData)
                console.log(58, result)
                Alert.alert(
                    translator({translationId:"success"}), 
                    translator({translationId:"applicationSubmitted"})
                )
                navigation.navigate("Loans")
            } catch (error) {
                
                Alert.alert(
                    translator({translationId:"error"}), 
                    translator({translationId:"applicationSubmissionFailed"})
                )

            } finally {
                
                    setLoading(false)
                
              
            }
        } else {
            setLoading(false)
        }

    }

    return <MainLayout navigation={navigation}>
        <ScrollView style={styles.container}>
            <Text style={globalStyles.medium_header}>{translator({ translationId: "applyForLoan" })}</Text>

            <TextEntry onChange={(e) => handleEntries("full_name", e)}
                label={translator({ translationId: "fullName" })}
                placeHolderText={translator({ translationId: "fullName" })}
                errorMessage={errors["full_name"]}
                testId="fullName"
            />

            <TextEntry 
                onChange={(e) => handleEntries("email", e)}
                label={translator({ translationId: "email" })}
                placeHolderText="yourname@example.com"
                errorMessage={errors["email"]}
                testId="email"
                keyboardType="email-address"
            />

            <TextEntry 
                onChange={(e) => handleEntries("loan_amount", parseFloat(e))}
                label={translator({ translationId: "loanAmount" })}
                placeHolderText="UGX"
                errorMessage={errors["loan_amount"]}
                testId="loanAmount"
                keyboardType="numeric"
            />

            <TextEntry
                onChange={(e) => handleEntries("loan_purpose", e)}
                label={translator({ translationId: "loanPurpose" })}
                placeHolderText={translator({ translationId: "loanPurposeExample" })}
                errorMessage={errors["loan_purpose"]}
                testId="loanPurpose"
            />

            <AppButton
                backgroundColor={colors.primary}
                upperCase={true}
                buttonType={ButtonType.Contained}
                labelTranslationId={!loading ? 'applyForLoan': 'submittingApplication'}
                textColor={colors.secondaryContainer}
                onPressHandler={submitData}
                disabled={loading}
                loading={loading}
                testId="submitLoanApplicationButton"
            />
            <Spacer vertical={15}/>
        </ScrollView>
    </MainLayout>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       
        paddingBottom: 40,
    },
    row: {
        justifyContent: 'space-between',
    },
    contentContainer: {
        flexGrow: 1,
    },
});

export default ApplyForLoanScreen;