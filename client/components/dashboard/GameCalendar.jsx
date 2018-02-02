// import React from 'react';
const React = require('react');

// hardcoded calendar id
const calendarID = 'hi3jrvh01ii47efpo7fosup6p4@group.calendar.google.com'
const API_KEY = 'AIzaSyCHsOVnoo1R_UG2kUe12yCwdaoBzOZSpSY'
const style = {
  border: 0,
  // width: 500,
  height: 400,
  frameBorder: 0,
  scrolling: "no",
  margin: "20px auto",
  width: "600px",
  height: "600px",
  borderRadius: "3px",
  backgroundColor: "#aec1cc",
  boxShadow: "0px 1px 10px #888"
}

class GameCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      date: '',
      calendarUrl: '',
      embedLink: ''
    }
  }
  handleChange(name, event) {
    this.setState({ [name]: event.target.value })
  }

  handleOnClick(input) {
    console.log('clicked')
    if (input === 'calendarUrl') {
      this.setState({
        embedLink: `https://calendar.google.com/calendar/embed?src=${this.state.calendarUrl}`,
        calendarUrl: ''
      })
    }

    if (input === 'listCalendar') {
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

    // if (input === 'login') {
    //   gapi.auth2.getAuthInstance().signIn();
    // }
    // if (input === 'signout') {
    //   gapi.auth2.getAuthInstance().signOut();
    // }
    // if (input === 'list') {
    //   gapi.client.calendar.events.list({
    //     'calendarId': 'primary',
    //     'timeMin': (new Date()).toISOString(),
    //     'showDeleted': false,
    //     'singleEvents': true,
    //     'maxResults': 10,
    //     'orderBy': 'startTime'
    //   }).then(function(response) {
    //     var events = response.result.items;
    //     console.log(events)
    //   });
    // }
    // if (input === 'insert') {
    //   console.log('inserting')
    //   const request = gapi.client.calendar.events.insert({
    //     'calendarId': 'primary',
    //     'resource': event
    //   })
    //   request.execute((event) => {
    //     console.log(event)
    //   })
    // }
  }



  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {/* <h1>Test Component</h1>
        input calendar id here */}
        {/* <input
          type="text"
          value={this.state.calendarUrl}
          onChange={e => this.handleChange('calendarUrl', e)}
        />
        <br/>
        <button onClick={()=>{this.handleOnClick('calendarUrl')}}>Calendar Url</button>
        <button onClick={()=>{this.handleOnClick('listCalendar')}}>List Calendar</button>
        <br/>
        <input
          type="text"
          value={this.state.teamName}
          onChange={e => this.handleChange('teamName', e)}
        />
        <br/>
        <input
          type="text"
          value={this.state.date}
          onChange={e => this.handleChange('date', e)}
        />
        <br/>
        <button onClick={()=>{this.handleOnClick('login')}}>login</button>
        <button onClick={()=>{this.handleOnClick('insert')}}>insert</button>
        <button onClick={()=>{this.handleOnClick('list')}}>list</button>
        <br/>
        <br/> */}
        {/* <iframe src={this.state.embedLink} style={style}></iframe> */}
        <iframe src="https://calendar.google.com/calendar/embed?src=hi3jrvh01ii47efpo7fosup6p4%40group.calendar.google.com"  style={style}></iframe>
      </div>
    );
  }
}

export default GameCalendar;