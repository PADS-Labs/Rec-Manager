const React = require('react')
import './DailyDashboard.css';

function GameDetails(props){

  // profile image subcomponent
  function TeamLogo(props) {
    return(
      <div className="team-logo">
        <img src={props.img} />
      </div>
    )
  }

    return (
      <div className="gamedetails">
        <p>2/6/18</p>
        <p>6:00 PM</p>
        <a href="#">1835 Stoner Ave. Los Angeles, CA 90025</a>
        <p>Codesmith vs. USC</p>
        <TeamLogo img="https://cdn-images-1.medium.com/fit/c/200/200/1*JNW4fjwiurO5Dzlz9A3tnQ.png"  />
        <TeamLogo img="http://pluspng.com/img-png/usc-png-file-usc-trojan-head-svg-748.png"  />
      </div>
    )
  }

  export default GameDetails;