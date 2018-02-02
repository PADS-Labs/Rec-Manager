import React from 'react';

function Test2(props){
  console.log(props)
    return (
      <div className="event">
        <h4>Event!</h4>
        <p>Title: {props.eventInfo.summary}</p>
        <p>Start: {props.eventInfo.start.dateTime}</p>
        <p>End: {props.eventInfo.end.dateTime}</p>        
      </div>
    )
  }

  export default Test2;
