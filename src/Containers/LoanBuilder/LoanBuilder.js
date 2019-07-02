import React, { Component } from 'react';
import axios from 'axios';
import InputSlider from '../../Components/AmountComp/Input/InputSlider';
import LoanStatement from '../../Components/AmountComp/Statement/Statement';
import classes from './LoanBuilder.module.css';
import ClipPath from '../../Components/ClipPath/ClipPath';
import Landing from '../../Components/Landing/Landing';

class LoanBuilder extends Component {
    state = {
        amount: {
            type: 'range',
            minValue: 500,
            maxValue: 5000,
            step: 1,
            value:  600,
        },
        duration: {
            type: 'range',
            minValue: 6,
            maxValue: 24,
            step: 1,
            value:  9,
        },
        statement: null,
        loading: true,
    }
    componentDidMount () {
        this.doCalculation()
    }
    doCalculation = () => {
        this.setState({loading: true})
        const amount = this.state.amount.value;
        const numMonths = this.state.duration.value;
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${numMonths}`)
            .then(res => {
                console.log(res.data)
                this.setState({statement: res.data, loading: false})
            })
            .catch(err => {
                console.log(err)
                this.setState({loading: false})
            })
            console.log(this.state.loading)
    }
    amountChangedHandler = (event) => {
        const amount = {
            ...this.state.amount
        }
        
        const updatedAmount = event.target.value;
        amount.value = updatedAmount;
        console.log("your slide", amount)
        this.setState({amount: amount});
        // this.doCalculation()
        this.doCalculation()
    }
    durationChangedHandler = (event) => {
        const duration = {
            ...this.state.duration
        }
        
        const updatedDuration = event.target.value;
        duration.value = updatedDuration;
        console.log("your slide", duration)
        this.setState({duration: duration});
        this.doCalculation()
    }
    render () {
        return (
            <React.Fragment>
                <Landing />
                <div className={classes.LoanBuilder}>
                    <p className={classes.title}>swipe the sliders to get your result</p>
                <div className={classes.card}>
                    <InputSlider  typed={this.state.amount.type} 
                        maxed={this.state.amount.maxValue}
                        mined={this.state.amount.minValue}
                        steped={this.state.amount.step}
                        value={this.state.amount.value}
                        changed={this.amountChangedHandler}>slide for amount</InputSlider>
                        <InputSlider  typed={this.state.duration.type} 
                        maxed={this.state.duration.maxValue}
                        mined={this.state.duration.minValue}
                        steped={this.state.duration.step}
                        value={this.state.duration.value}
                        changed={this.durationChangedHandler}>slide for duration</InputSlider>
                </div>
                    <ClipPath />
                </div>
                <LoanStatement statement={this.state.statement} loading={this.state.loading}/>
            </React.Fragment>
        )
    }
}
export default LoanBuilder;