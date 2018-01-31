import './Login.css';

class App extends React.Component {
    render(){
      return (
        <div className="app-container">
         <div className="container">
           <Intro />
           <Form />
         </div>
        </div>
      )
    }
  }
  
  /* Main Intro Component */
  
  function Intro(props){
    return (
      <div className="intro">
        <ProfileImage img=""  />
        <IntroGreeting />
      </div>
    )
  }
  
  /* Profile Image Sub Component */
  
  function ProfileImage(props) {
    return(
      <div className="profile-image">
        <img src={props.img} />
      </div>
    )
  }
  
  /* Intro Greeting Sub Component */
  
  function IntroGreeting(props) {
    return(
      <div className="intro-greeting">
        <h1 className="greeting-heading"> Welcome to Rec Manager! </h1>
        <h3 className="greeting-instruction"> Sign in to your team</h3>
       </div>
    )
  }
  
  /* Intro End */
  
  /* Input Fields Start */
  
  function Form(props) {
    return(
      <div className="input-fields">
        <form>
          <Input type="text" name="user_email" placeholder="Email" checkmark="true" />
          <Input type="password" name="user_password" placeholder="Password" checkmark="true" />
          <Input type="checkbox" name="remember_user" label="Remember Me"  />
          <Button value="Sign In"/>
        </form>
       </div>
    )
  }
  
  function Input(props){
    if(props.checkmark == "true" || props.border == "true") {
      return (
        <div className="input">
          <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={(e) => emailVal(e.target.value)} />
          <div className="input-checkmark">
            <i className="fa fa-check"></i>
          </div>
        </div>
      )
    } else {
      return (
      <div className="input no-border input-inline">
        <input type={props.type} name={props.name} placeholder={props.placeholder} />
        <label for={props.name}>{props.label}</label>
      </div>
      )
    }
  }
  
  function emailVal(value){
    if(value.includes("@") == true){
      document.querySelector('.input-checkmark').style.color = "#33df11";
    } else {
      document.querySelector('.input-checkmark').style.color = "inherit";
    }
  }
  
  
  /* Input Fields End */
  
  /* Button Start */
  function Button(props) {
    return (
      <div className="button">
        <button type="button">{props.value}</button>
      </div>
    )
  }
  
  /* Button End */
  
  
  ReactDOM.render(
    <App />, document.getElementById('root')
  );
  
  