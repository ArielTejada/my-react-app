/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.

https://arieltejada.github.io/my-react-app/
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios';
import AccountBalance from './components/AccountBalance';

class App extends Component {
  constructor(props) {  // Create and initialize state
    super(props); 
    this.state = {
      accountBalance: 1234567.89,
      credits: [],
      debits: [],
      creditsTotal: 0,
      debitsTotal: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
      date: ''
    }
    this.updateDebits = this.updateDebits.bind(this);
    this.updateCredits = this.updateCredits.bind(this);
    this.updateAccountBalance = this.updateAccountBalance.bind(this);
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  // updates debits total amount 
  updateDebits(debit){
    this.state.debits.push(debit);
    let total = this.state.debitsTotal;
    total += parseFloat(debit.amount);
    this.setState({
      debitsTotal: total
    })
  }

  // update credits total amount
  updateCredits(credit){
    this.state.credits.push(credit);
    let total = this.state.creditsTotal;
    total += parseFloat(credit.amount);
    this.setState({
      creditsTotal: total
    })
  }

  // updates account balance. Its passed into other components so they can call state changes
  updateAccountBalance(newAccountBalance){
    this.setState({accountBalance: newAccountBalance})
  }

  // api calls one after another
  async componentDidMount(){
    let debitsTotal = 0; 
    let creditsTotal = 0;

    // Getting Debits Data
    axios.get("https://moj-api.herokuapp.com/debits")        
      .then((response) =>{               
        this.setState({debits: response.data})
        response.data.forEach((data) => {debitsTotal += data.amount})
        this.setState({debitsTotal: debitsTotal})
      })   

    // Getting Credits Data
    axios.get("https://moj-api.herokuapp.com/credits")
    .then((response) =>{               
      this.setState({credits: response.data})
      response.data.forEach((data)=>{creditsTotal += data.amount})
      this.setState({creditsTotal: creditsTotal})
    })
    .then(() => {this.setState({accountBalance: (creditsTotal - debitsTotal).toFixed(2)})})
  }

  render() {  

    let accountBalance = this.state.accountBalance
    let debitsTotal = this.state.debitsTotal
    let creditsTotal = this.state.creditsTotal
    let accountBalanceTotal = (accountBalance + creditsTotal - debitsTotal)

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    
    const DebitsComponent = () => (
      <Debits 
        debits={this.state.debits} 
        updateDebits={this.updateDebits} 
        creditsTotal={this.state.creditsTotal} 
        debitsTotal={this.state.debitsTotal} 
        accountBalance={this.state.accountBalance} 
        updateAccountBalance={this.updateAccountBalance} 
      />) 

    const CreditsComponent = () => (
      <Credits 
        credits={this.state.credits} 
        updateCredits={this.updateCredits} 
        creditsTotal={this.state.creditsTotal} 
        debitsTotal={this.state.debitsTotal} 
        accountBalance={this.state.accountBalance} 
        updateAccountBalance={this.updateAccountBalance} 
      />)


    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/my-react-app">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;