import { createContext, useMemo, useReducer } from "react";
import { Actions, AppReducer } from "./reducers/appReducer";
import ILoan from "@models/ILoan";

export interface IStoreData {
  loans: ILoan[],
}

export interface IAppContext {
  data: IStoreData
  dispatch: React.Dispatch<Actions>
}

export interface IAppState {
  data: IStoreData,
}


export const AppContext = createContext<IAppContext | null>(null);


interface IProps {
  children: React.ReactNode
}


export const AppContextProvider: React.FC<IProps> = ({ children }) => {


  const initialActiveRecord: IStoreData = {
    loans: [],
    }

  const [state, dispatch] = useReducer(AppReducer, {
    data: initialActiveRecord,
  })

  const contextValue = useMemo(
    () => ({data: state.data, dispatch }),
    [ state.data, dispatch]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}