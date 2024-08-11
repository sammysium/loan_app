import { gql } from '@apollo/client';
import ILoan from '@models/ILoan';

export const GET_LOAN_PRODUCTS = gql`
  query GetLoanProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;

export interface GetLoanProductsData {
  loanProducts: ILoan[];
}