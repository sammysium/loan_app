import ILoan  from "@models/ILoan";
import ILoanApplication from "@models/ILoanApplication";

export interface StoreState {
  loans: ILoan[];
}

export interface StoreActions {
  setLoanTypes: (loans: ILoan[]) => void;
  addUserLoan: (loans: ILoanApplication[]) => void;
}

export interface StoreContext {
  state: StoreState;
  actions: StoreActions;
}
