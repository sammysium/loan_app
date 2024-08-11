import ILoanApplication from "@models/ILoanApplication"
import { validateLoanApplicationData } from "@validations/loanApplicationValidator"
import en from "@assets/i18n/en";

describe("Validate loan application form", () => {
    it("should correctly mark invalid data", () => {

        const applicationData: ILoanApplication = {
            full_name: "",
            email: "",
            loan_amount: 880,
            loan_purpose: ""
        }

        const validationResult = validateLoanApplicationData(applicationData)
        expect(validationResult["full_name"]).toEqual(en.errorFullNameMissing)
        expect(validationResult["email"]).toEqual(en.errorInvalidEmailFormat)
        expect(validationResult["loan_purpose"]).toEqual(en.errorInvalidPurpose)


    })

    it("should pass data", () => {

        const applicationData: ILoanApplication = {
            full_name: "name",
            email: "name@name.net",
            loan_amount: 880,
            loan_purpose: "home loan"
        }

        const validationResult = validateLoanApplicationData(applicationData)
        expect(Object.keys(validationResult).length).toStrictEqual(0)

    })
})