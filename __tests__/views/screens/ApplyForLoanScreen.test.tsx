import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { NavigationProps } from '@config/routes';
import * as loanApplicationValidator from '@validations/loanApplicationValidator';
import ApplyForLoanScreen from '@views/screens/ApplyForLoanScreen';


jest.mock('@utils/translator')

// Mock Alert
jest.spyOn(Alert, 'alert').mockImplementation(() => { });

// Create a mock navigation object that includes required methods
const mockNavigate = jest.fn();
const mockGoBack = jest.fn();
const mockReset = jest.fn();
const mockIsFocused = jest.fn();
const mockDispatch = jest.fn();

const mockNavigation: NavigationProps = {
    navigate: mockNavigate,
    goBack: mockGoBack,
    reset: mockReset,
    isFocused: mockIsFocused,
    dispatch: mockDispatch,
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: jest.fn(),
    getState: jest.fn(),
    getParent: jest.fn(),
    setOptions: jest.fn(),
    getId: jest.fn(),
    replace: jest.fn(), push: jest.fn(), pop: jest.fn(), popToTop: jest.fn()
};

describe('ApplyForLoanScreen', () => {

    let spyAlert = jest.spyOn(Alert, 'alert');

    jest.spyOn(loanApplicationValidator, 'validateLoanApplicationData').mockImplementation(() => ({}));

    beforeEach(() => {

        jest.restoreAllMocks();
        spyAlert = jest.spyOn(Alert, 'alert');
    });

    afterEach(() => {

        spyAlert.mockReset();

    });

    it('should match snapshot', () => {
        const { toJSON } = render(<ApplyForLoanScreen navigation={mockNavigation} />);
        expect(toJSON()).toMatchSnapshot();
    });


    it('should process form', async () => {

        const { getByTestId } = render(<ApplyForLoanScreen navigation={mockNavigation} />);


        const fullNameInput = getByTestId("fullName");

        const emailInput = getByTestId('email');
        const loanAmountInput = getByTestId('loanAmount');
        const loanPurposeInput = getByTestId("loanPurpose");
        const submitButton = getByTestId("submitLoanApplicationButton")

        fireEvent.changeText(fullNameInput, 'John Doe');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.changeText(loanAmountInput, '1000');
        fireEvent.changeText(loanPurposeInput, 'Business Expansion');

   

         act(() => {
        
            fireEvent.press(submitButton)        
        });

    });

});
