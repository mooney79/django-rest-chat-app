// import {useState} from 'react';
import RoomNavButtons from './RoomNavButtons';


function RoomNav(props){
    // const rooms = props.rooms.map(room => room.room);
    // console.log(rooms, ' From RoomNav')
    // const rooms = ['Test', 'Home', 'Class']
    // const uniqueRooms = [...new Set(rooms)];
    const roomNavButtonHTML = props.rooms.map(room => <RoomNavButtons key={room.name} 
        value={room.name} setSelection={props.setSelection} selection={props.selection}/>);
    
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

