import ILoan from "@models/ILoan";

import { IAppState, IStoreData } from "../AppContext";
import ILoanApplication from "@models/ILoanApplication";

export type Actions =
  { type: 'SET_LOAN_TYPES'; payload: ILoan[] }
  |  { type: 'ADD_USER_LOAN'; payload: ILoanApplication[] }
  ;




export const AppReducer = (state: IAppState, action: Actions): IAppState => {

  switch (action.type) {
  

    case "SET_LOAN_TYPES":
      return {
        ...state, 
        data: {
          loans: action.payload
        }
      }
    
    default:
      return state;
  }
};