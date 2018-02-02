const React = require('react');

class GameAttendance extends React.Component{
    render(){
        return(
            <div>
                <div id="button-row">
                <div id="button-1">
                <input type="radio" name="radio" id="radio1" class="radio" checked/>
                <label for="radio1">In</label>  
                </div>
                <div id="button-2">
                <input type="radio" name="radio" id="radio2" class="radio"/>
                <label for="radio2">Out</label>
                </div>
                </div>
            </div>
        )
    }
}

export default GameAttendance;