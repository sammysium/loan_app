import ILoanApplication, { ILoanApplicationResponse } from "@models/ILoanApplication";
import httpCalls from "./httpCaller";
import { EndPoints } from "@config/EndPoints";




class ServiceLoans {

    submitNewLoan = async (loanApplication: ILoanApplication): Promise<ILoanApplicationResponse> => {

        try {
            const result = await httpCalls.post(EndPoints.makeALoanApplication, loanApplication)
            
            return result.data as ILoanApplicationResponse
        } catch (error) {
            // this can go somewhere...
            console.log(error)
            throw error;
        }

    }

}

export default new ServiceLoans();