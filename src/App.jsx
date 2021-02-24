import React from 'react';
import Header from '../src/components/Header';
import Balance from '../src/components/Balance';
import IncomeExpense from '../src/components/IncomeExpense';
import TransactionList from '../src/components/TransactionList';
import AddTransaction from '../src/components/AddTransaction';
import { GlobalProvider } from '../src/context/GlobalState';

const App = () => {
    return (
        <>
            <GlobalProvider>
                <Header />
                <div className="container">
                    <Balance />
                    <IncomeExpense />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GlobalProvider>
        </>
    )
};
export default App;