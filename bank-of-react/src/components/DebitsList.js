import React, {Component} from 'react';
import Debit from './Debit';

const DebitsList = (props) => {
//USE DEBITS LIST 
const debitComponent = props.debit.map((debit) => {
    return (<Debit 
        description={debit.description}
        amount={debit.amount}
    date={debit.date}/>);
})
    return (
        <div>
            {debitComponent}
        </div>
    )
}


export default DebitsList;
