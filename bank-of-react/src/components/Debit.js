import React, {Component} from 'react';
// import DebitList from './components/DebitList';

const Debit = (props) => {
    return (
        <div>
            <span>Description: {props.description}
                Amount: {props.amount}
                Date: {props.date}
                </span>
                    </div>
    )

}

export default Debit;