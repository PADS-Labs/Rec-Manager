const React = require('react');
const Link = require('react-router');
// import './DailyDashboard.css';
import GameDetails from './GameDetails.jsx'
import GameAttendance from './GameAttendance.jsx'

class DailyDashboard extends React.Component {
  
  constructor (props){
    super(props)
    this.state = {
      teamName: '',
      date: '',
      calendarUrl: '',
      embedLink: ''
    }
  }

  componentDidMount(){
    console.log('listing')
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${API_KEY}`)
      .then((res) => {
        console.log('first promise')
        return res.json()
      })
      .then((json) => {
        console.log('last promise')
        console.log(json)
      })
  }
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <GameDetails />
        <GameAttendance />
      </div>
    )
  }
}
  
  export default DailyDashboard;