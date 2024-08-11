import { useContext } from "react";
import { AppContext, IAppContext } from "@store/AppContext";
import { StoreContext, StoreActions } from "@store/IStore";
import ILoan from "@models/ILoan";
import ILoanApplication from "@models/ILoanApplication";

export const useContextAPI = (): StoreContext => {
  const context = useContext(AppContext) as IAppContext;

  if (!context) {
    throw new Error("useContextAPI must be used within an AppContextProvider");
  }

  const { data, dispatch } = context;

  const actions: StoreActions = {
    setLoanTypes: (loans: ILoan[]) => dispatch({ type: 'SET_LOAN_TYPES', payload: loans }),
    addUserLoan: (loans: ILoanApplication[]) => dispatch({ type: 'ADD_USER_LOAN', payload: loans }),
  };

  return { state: data, actions };
};
