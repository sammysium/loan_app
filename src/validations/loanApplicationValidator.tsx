import GenericFormErrorFields from "@models/GenericFormErrorFields"
import { hasNoValue, isValidEmail, isValidMoney } from "./formValidator"
import ILoanApplication from "@models/ILoanApplication"
import { translator } from "@utils/translator"
import ILoan from "@models/ILoan"
import { config } from "@config/config"

export const validateLoanApplicationData = (data: ILoanApplication): GenericFormErrorFields => {
    const errorMessages: GenericFormErrorFields = {}
    console.log('%%%%%%% ', data)
    if (!isValidEmail(data.email)) {
        errorMessages["email"] = translator({translationId: "errorInvalidEmailFormat"})
    }

    if (hasNoValue(data.full_name)) {
        errorMessages["full_name"] = translator({translationId: "errorFullNameMissing"})
    }

    if (!isValidMoney(data.loan_amount, config.default.loan.minimum , config.default.loan.maximum)) {
        errorMessages["loan_amount"] = translator({translationId: "errorInvalidLoanAmount"})
    }

    if (hasNoValue(data.loan_purpose)) {
        errorMessages["loan_purpose"] = translator({translationId: "errorInvalidPurpose"})
    }

    return errorMessages;
}