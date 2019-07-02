import React from 'react';
import classes from './Statement.module.css';
import Loader from '../../Loader/Loader'

const loanStatement = (props) => {
    const receipt = {
        ...props.statement
    }
    let printStatement = null;
    if (props.loading) {
        printStatement = <div className={classes.loadingOn}><Loader /></div>
    }
    else if (props.statement) {
        printStatement = (
            <div className={classes.LoanStatement}>
                <p className={classes.interest}>Your interest rate:
                    <span> {receipt.interestRate}</span>
                </p>
                <p className={classes.monthlyAmount}>Monthly payment amount:
                    <span> {receipt.monthlyPayment.amount} {receipt.monthlyPayment.currency}</span>
                </p>
                <p className={classes.duration}>Duration: 
                    <span> {receipt.numPayments}</span>
                </p>
                <p className={classes.amount}>Principal amount: 
                    <span> {receipt.principal.amount} {receipt.principal.currency}</span>
                </p>
            </div>
        )
    }
    return (
        <React.Fragment>
            {printStatement}
        </React.Fragment>
    )
}

export default loanStatement;