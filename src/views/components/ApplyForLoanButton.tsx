import React from 'react';

import { useTheme } from 'react-native-paper';
import { NavigationProps } from '@config/routes';
import AppButton, { ButtonType } from '@views/components/AppButton';


interface IProps {
    navigation: NavigationProps
}

const ApplyForLoanButton: React.FC<IProps> = ({ navigation }) => {
    const { colors } = useTheme()

    return (

        <AppButton
            backgroundColor={colors.primary}
            upperCase={true}
            buttonType={ButtonType.Contained}
            labelTranslationId='applyForLoan'
            textColor={colors.secondaryContainer}
            onPressHandler={() => navigation.navigate("Apply")}
            compact
            displayStyle={{ fontSize: 9, marginHorizontal: 20, marginVertical: 2 }}
        />

    );
};


export default ApplyForLoanButton;
