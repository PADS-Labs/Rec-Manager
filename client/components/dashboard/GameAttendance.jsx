const React = require('react');

class GameAttendance extends React.Component{
    render(){
        return(
            <div>
                <GameAttendanceIn />
                <GameAttendanceOut />
                <GameAttendanceUncertain />
            </div>
        )
    }
}

export default GameAttendance;