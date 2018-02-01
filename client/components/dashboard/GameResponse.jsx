 
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

  export default GameResponse;