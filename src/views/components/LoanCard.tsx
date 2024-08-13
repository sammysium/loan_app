import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import ILoan from '@models/ILoan';
import { withTheme } from 'react-native-paper';
import { globalStyles } from '@views/themes/styles';
import { formatCurrency } from '@utils/dataFormatter';
import { translator } from '@utils/translator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppButton, { ButtonType } from './AppButton';


interface IProps {
  loan: ILoan,
  theme: any
}

const LoanCard: React.FC<IProps> = ({ loan, theme }) => {
  
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={globalStyles.loan_header}>{loan.name}</Text>
        <Text>{translator({translationId:"loanMaximumAmount"})}</Text>
        <Text style={{color: theme.colors.primary}}>{formatCurrency(loan.maximumAmount)}</Text>
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Text>{translator({translationId:"interestRate"})}</Text>
            <Text>{loan.interestRate} %</Text>
          </View>
          <View style={{flexDirection: 'row', 
            alignItems: "center", 
            borderWidth: 1, 
            borderColor: "blue", 
            borderRadius: 10,
            paddingRight: 10
            
            }}>
          <AppButton
            buttonType={ButtonType.Text}
            labelTranslationId="learnMore"
            compact
            displayStyle={{ fontSize: 9, marginHorizontal: 20, marginVertical: 2 }}
           // icon="arrow-right-thin"
            //putIconOnLeft={false}
            //iconColor="blue"
            onPressHandler={() => console.log('Button pressed')}
          />
          <Icon name="arrow-right-thin" color="blue" />
    
          </View>
        
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5, // Space between cards
    width: '100%',
    backgroundColor: "#FFF"
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default withTheme(LoanCard);
