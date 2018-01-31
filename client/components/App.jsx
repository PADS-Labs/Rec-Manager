import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


// const fakeAuth = {
//   isAuthenticated: false,
//   //method: fake the authentication process
//   authenticate(cb){
//     this.isAuthenticated = true
//     setTimeout(cb, 100) //fake async login process
//   }, //method: fake signout process
//     this.isAuthenticated = false //change to false
//     setTimeout(cb, 100)
// }

//components to render once we get to those routes
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

//change to class App extends Component
//export default App
//OR 
//use export default class App extends React.Component {
class App extends Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
    </div>

      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to='/public'>Public Page</Link></li>
      //       <li><Link to='/protected'>Protected Page</Link></li>
      //     </ul>

      //     <Route path='/public' component={Public} />
      //     <Route path='/login' component={Login} />
      //     <PrivateRoute path='/protected' component={Protected} />
      //   </div>
      // </Router>

    );
  }
}

export default App;