// import {useState} from 'react';
import RoomNavButtons from './RoomNavButtons';


function RoomNav(props){
   // const rooms = props.msgs.map(room => room.room);
    const rooms = ['Test', 'Home', 'Class']
    const uniqueRooms = [...new Set(rooms)];
    const roomNavButtonHTML = uniqueRooms.map(room => <RoomNavButtons key={room} 
        value={room} setSelection={props.setSelection} selection={props.selection}/>);
    return(
        <div className="nav-bar">
            {roomNavButtonHTML}
        </div>
    )
}


export default RoomNav

