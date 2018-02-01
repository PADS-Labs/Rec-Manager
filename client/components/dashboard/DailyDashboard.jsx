const React = require('react');
const Link = require('react-router');
// import './DailyDashboard.css';

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
        <p>7:30 PM</p>
      </div>
    )
  }
  
  function GameLocation(props){
    return (
      <div className="gamelocation">
        <a href="#">1835 Stoner Ave. Los Angeles, CA 90025</a>
      </div>
    )
  }
  
  function GameOpponent(props){
    return (
      <div className="gameopponent">
        <p>Tigers</p>
      </div>
    )
  }
  
  function GameResponse(props){
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
  
  export default DailyDashboard;