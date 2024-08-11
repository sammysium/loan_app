

# Getting Started

Welcome to Numida Loan Application! With the app, you get to see list of available loans and apply for a new loan!

# Running the application

Follow the following simple steps to run the application

Clone the repo
Run npm install
create .env file and add AVALIABLE_LOAN_TYPES_END_POINT=http://10.0.2.2:5000/, stating the port of your backend
npm run android

or

npm run ios

# Basic Principles

1. Absolute imports > relative imports. Checkout tsconfig and babel.
2. Libraries change, get outdated and a whole more. As much as possible, create middleware layers that makes changing easy. Confusing? Not a problem.

   Say you decide to use Conext API for centralized state management. In your app, you will use useContext here and there. Imagine you have 10, 20 or 40 screens!

   A year later, you decide to move to Redux. The change will be a nightmare. Then a new state management comes out and you have to go all out again.

   So we create a middleware layer that would hide the choice of state from our UI. When we move to another library for any reason, the change will be in selected files.

   The logic goes to many. Look at HttpCall that exposes axios. If you decide to move to fetch, you only need to change HttpCall class.

   How cool is that?
3. Prepare localization early on. Look at utils/translator. YOu can choose a library of your choice (I love react-i18n with next). Once again, UI won't need to change at all.

