import {useState} from 'react';
import RoomNavButtons from './RoomNavButtons';
import Cookies from 'js-cookie'


function RoomNav(props){
   
    const [edit, setEdit] = useState(false);
    const [roomName, setRoomName] = useState({name: ''});

    function handleInput(event) {
        const {name, value} = event.target;
        setRoomName(prevState => ({   
            ...prevState,         
            [name]:value,
        }))
    }


    const roomNavButtonHTML = props.rooms.map(room => <RoomNavButtons key={room.name} 
        value={room.name} setSelection={props.setSelection} selection={props.selection}/>);
    
    let addRoomHTML;

    function handleClick(e){
        console.log('Create a new room dialogue here!') //ADD THIS!
        setEdit(true);
        console.log(edit);
    }

    function handleClick2(e){
        e.preventDefault();
        addRoom(roomName);
        setEdit(false);
        console.log(edit);
    }

    async function addRoom(text) {
        const response = await fetch(`/api_v1/chat/rooms/`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify(text),
        }).catch(console.log('Something went wrong'));
        if (response.ok){
              console.log('New Room Created!');
              props.setRooms([...props.rooms, [roomName]]);
              props.fetchRooms();
              setRoomName('');
    
        }
      }


    if (edit) {
        addRoomHTML = <form className="row" onSubmit={handleClick2}><input className="col-10" type="text" id="name" name="name" value={roomName.name} onChange={handleInput}/><button className="nav-button btn new-btn col-10" type="submit" key="new_room">Add Room</button></form> 
    } else {
        addRoomHTML = <button id="new-room" className="nav-button btn new-btn" type="button" key="new_room" onClick={handleClick}> +New+</button>
    }


    return(
        <div className="nav-bar col-2 btn-group-vertical">
            {roomNavButtonHTML}
            {addRoomHTML}
        </div>
    )
}


export default RoomNav