import React from 'react';
import ReactDOM from 'react-dom';
import '../libs.css';
//BrowserRouter, Link, Redirect
import {
  Route,
  Switch,
  Router
} from 'react-router-dom';

import Login from './session/Login.jsx'
import DailyDashboard from './dashboard/DailyDashboard.jsx'

// test component
import Test from './Test.jsx'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dummy object to mock the authentication login/logout
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb){
//     this.isAuthenticated = true
//     setTimeout(cb, 100) //fake async login process
//   },
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//components to render once we get to those routes: dailydashboard, and login
// const Protected = () => <h3>Protected</h3> //show this component when authenticated, otherwise
// const Public = () => <h3>Public</h3> //redirect to here

// class Login extends React.Component (
//   state = {
//     redirectToReferrer: false
//   }

//   login = () => {
//     fakeAuth.authenticate(()=>{
//       this.setState(()=>({
//         redirectToReferrer: true
//       }))
//     })
//   }

//   render() {
//     const { redirectToReferrer } = this.state
//     const { from } this.props.location.state || { from: { pathname: '/'} }
//     if (redirectToReferrer===true){
//       return(
//         <Redirect to={from} />
//       )
//     }

//     return(
//       <div>
//         <p>You must log in to view this page </p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// )

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={() => (
// when path matches, then render component normally, but if NOT authenticated, redirect to login page
//     fakeAuth.isAuthenticated === true ? <Component {...props}/> : <Redirect to='login' />
//   )}
// )

//App extends Component
//export default App
//OR
//export default class App extends React.Component {
// class App extends Component {
export default class App extends React.Component {
  render() {
    return (


      <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/DailyDashboard' component={DailyDashboard} />
            <Route exact path='/test' component={Test} />
      </Switch>
    )
  }
}
// export default App;
