// import {useState} from 'react';
import RoomNavButtons from './RoomNavButtons';


function RoomNav(props){
   // const rooms = props.msgs.map(room => room.room);
    const rooms = ['Test', 'Home', 'Class']
    const uniqueRooms = [...new Set(rooms)];
    const roomNavButtonHTML = uniqueRooms.map(room => <RoomNavButtons key={room} 
        value={room} setSelection={props.setSelection} selection={props.selection}/>);
    
    function handleClick(e){
        console.log('Create a new room dialogue here!') //ADD THIS!
    }

    return(
        <div className="nav-bar col-2 btn-group-vertical">
            {roomNavButtonHTML}
            <button id="new-room" className="nav-button btn new-btn" type="button" key="new_room" onClick={handleClick}> +New+</button>
        </div>
    )
}


export default RoomNav

