const React = require('react');
const Link = require('react-router');
import './DailyDashboard.css';

class DailyDashboard extends React.Component {
    render() {
      return (
        <div>
          <h1>Dashboard</h1>
          <GameDetails />
        </div>
      )
    }
  }
  
  function GameDetails(props){
    return (
      <div className="gamedetails">
        <GameDate />
        <GameTime />
        <GameLocation />
        <GameOpponent />
        <GameResponse />
      </div>
    )
  }
  
  function GameDate(props){
    return (
      <div className="gamedate">
        <p>1/31/18</p>
      </div>    
    )
  }
  
  function GameTime(props){
    return (
      <div className="gametime">
        
      </div>
    )
  }
  
  function GameLocation(props){
    return (
      <div className="gamelocation">
        
      </div>
    )
  }
  
  function GameOpponent(props){
    return (
      <div className="gameopponent">
        
      </div>
    )
  }
  
  function GmaeResponse(props){
    return (
      <div className="gameresponse">
        <ResponseButton value="In"/>
        <ResponseButton value="Out"/>      
      </div>
    )
  }
  
  function ResponseButton(props){
    return (
      <div className="gamebutton">
        <button type="button">{props.value}</button>
      </div>
    )
  }
  
  // Render the App component into the #app div
  React.render(
    <DailyDashboard />, 
    document.getElementById('app')
  );