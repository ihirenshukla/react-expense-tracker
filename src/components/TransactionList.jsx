import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => {
                    const sign = transaction.amount<0 ? '-' : '+';
                    return(<li className={transaction.amount<0 ? "minus" : "plus"}>
                        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                    </li>)
                })}
            </ul>
        </>
    )
}

export default TransactionList;
