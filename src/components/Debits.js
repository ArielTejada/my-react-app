/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Styles from './styles';

class Debits extends Component {

  constructor (props) {  
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      debits: this.props.debits,
      debitInput: {
        description: '',
        amount: 0,
        date: new Date().toISOString()
      },
      debitsTotal: this.props.debitsTotal,
      creditsTotal: this.props.creditsTotal
    }
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddDebit = this.handleAddDebit.bind(this);
  }

  // add debit description
handleDescriptionInput = (event) => {
  const newDebitInput = this.state.debitInput;
  newDebitInput.description = event.target.value;
  this.setState({debitInput: newDebitInput});
}

// add credit amount
handleAmountInput = (event) => {
  const newDebitAmount = this.state.debitInput;
  newDebitAmount.amount = event.target.value ;
  this.setState({debitInput: newDebitAmount});
}

// add credit submit button
handleAddDebit = () => {
  this.props.updateDebits(this.state.debitInput);
  let accountBalance = this.props.accountBalance;
  let debitAmount = this.state.debitInput.amount;
  let newAccountBalance = (accountBalance - debitAmount);
  this.props.updateAccountBalance(newAccountBalance.toFixed(2));

  // reset credit input
  this.setState({
    debitInput: {
      description: '', 
      amount: 0, 
      date: new Date().toISOString()
  }})

  // clear input fields
  let desc = document.getElementById('descValue');
  let amount = document.getElementById('amountValue');
  desc.value = '';
  amount.value = '';
}

  render(){
    return (
      <div style={Styles.wholePage}>

        <h1 style={Styles.title}>Debits</h1>

        <div style={Styles.categories}>
          <h2 style={{width: '50%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Description</h2>
          <h2 style={{width: '30%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Date</h2>
          <h2 style={{width: '20%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Amount</h2>
        </div>

        <div>
          {this.props.debits.map ((debit , index) =>
            <div key={index} style={{display: 'flex'}}>
              <p style={{width: '50%', outline: '1px solid black'}}>{debit.description}</p>  
              <p style={{width: '30%', outline: '1px solid black'}}>{debit.date.slice(0, 10)}</p>
              <p style={{width: '20%', outline: '1px solid black'}}>${debit.amount} </p>
            </div>)  
          }  

          <h2>Total Debits: {this.props.debitsTotal}</h2>
          <h2>Total Credits: {this.props.creditsTotal}</h2>
          <h2>Balance = (Credits - Debits)</h2>
          <h2>Your Current Balance: {this.props.accountBalance}</h2>

        </div>
      
        <div>
          <br/>

          <div>
            <h1 style={{outline: '1px solid black', textAlign: 'center'}}>Add A Debit</h1>
            <div style={{display: 'flex'}}>
              <h2 style={{width: '50%', paddingLeft: '5%'}}>Description</h2>
              <h2 style={{width: '50%', paddingLeft: '5%'}}>amount</h2>
            </div>
            <div style={{display: 'flex'}}>
              <input 
                id="descValue"
                type="text" 
                placeholder='add description...' 
                style={{width: '50%', marginLeft: '3%'}}
                onChange={this.handleDescriptionInput}/>
              <input 
                id="amountValue"
                type="number" 
                placeholder='add amount...' 
                style={{width: '20%'}}
                onChange={this.handleAmountInput}/>
              <button 
                type="submit" 
                style={{width: '20%'}}
                onClick={this.handleAddDebit}
              >Add Debits</button>
            </div>
          </div>

          <br/>

        </div>
    <br/>
      <Link to="/" onClick={this.handleBackToHome}>Return to Home</Link>
    </div>
    );
  }
  
}

export default Debits;