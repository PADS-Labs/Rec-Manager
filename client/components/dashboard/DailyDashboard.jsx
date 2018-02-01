const React = require('react');
const Link = require('react-router');
// import './DailyDashboard.css';
import GameDetails from './GameDetails.jsx'
import GameResponse from './GameResponse.jsx'
import GameAttendance from './GameAttendance.jsx'

class DailyDashboard extends React.Component {
    render() {
      return (
        <div>
          <h1>Dashboard</h1>
          <GameDetails />
          <GameResponse />
          <GameAttendance />
        </div>
      )
    }
  }

  export default DailyDashboard;
