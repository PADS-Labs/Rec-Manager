const React = require('react')

import GameDate from './GameDate.jsx'
import GameTime from './GameTime.jsx'
import GameLocation from './GameLocation.jsx'
import GameOpponent from './GameOpponent.jsx'
import GameResponse from './GameResponse.jsx'

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

  export default GameDetails;