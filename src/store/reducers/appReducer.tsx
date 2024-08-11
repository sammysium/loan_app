import ILoan from "@models/ILoan";

import { IAppState, IStoreData } from "../AppContext";
import ILoanApplication from "@models/ILoanApplication";

export type Actions =
  { type: 'SET_LOAN_TYPES'; payload: ILoan[] }
  |  { type: 'ADD_USER_LOAN'; payload: ILoanApplication[] }
  ;




export const AppReducer = (state: IAppState, action: Actions): IAppState => {

  switch (action.type) {
    
    /*
    case 'SET_SUBJECT':
      console.log(action.payload, action.type)
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          activeSubject: action.payload,
        },
      };

    case 'SET_LEVEL':
    
      return {
        ...state,
        activeRecord: {
          ...state.activeRecord,
          activeLevel: action.payload,
        }
      }

    case 'SET_CONTENT':
      return {
        ...state, 
        activeRecord: {
          ...state.activeRecord,
          activeContent: action.payload
        }
      }
      */

    default:
      return state;
  }
};