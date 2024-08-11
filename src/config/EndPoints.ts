
const BASE_URL = process.env.AVALIABLE_LOAN_TYPES_END_POINT || 'http://10.0.2.2:8080/'

export const EndPoints = {
    'graphql': BASE_URL?.concat('graphql'),
    'makeALoanApplication':  BASE_URL?.concat('apply-loan')
}