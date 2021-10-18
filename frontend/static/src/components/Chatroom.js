import { useEffect } from "react";
import ChatMessages from "./ChatMessages";


function Chatroom(props){

    // const [poster, setPoster] = useState('');
  
    // useEffect(() => {
        // async function fetchPoster(user){
        //     const response = await fetch(`/rest-auth/user/${user}/`,
        //     {headers: {
        //         'Content-Type': 'application/json',
        //         'X-CSRFToken': Cookies.get('csrftoken')
        //     }} );    
        //     if (response.ok){
        //         const data = await response.json();
        //         return data.username        
        //     } 
        // }
        // setPoster(fetchPoster(props.sender));
        // },[]);

    //  setTimeout(() => {
    //      // console.log(props);
    //      console.log(poster);
    //  }, 500)
    // setInterval(()=> 
    // {
    //     let roomMessages=props.msgs.filter(msg => props.selection === msg.room_assoc);
    //     let RoomHTML = roomMessages.map(roomMsg => <ChatMessages key={roomMsg.time_created} {...roomMsg} />)
    //     console.log('This came from chatroom useEffect')
    // }, 500)


    // props.msgs.forEach(fetchPoster(props.sender));
    // const MessageHTML = props.msgs.map(msg => <ChatMessages key={msg.time_created} {...msg} />);
    console.log(props.msgs);
    let roomMessages=props.msgs.filter(msg => props.selection === msg.room_assoc);
    let RoomHTML = roomMessages.map(roomMsg => <ChatMessages key={roomMsg.time_created} {...roomMsg} />)
    
    return(
        <div className="chatroom col-12">
            {/* {`Selection =${props.selection}`} */}
            {/* {MessageHTML} */}
            {RoomHTML}
        </div>
    )
}

export default Chatroom

/*
To Add--
--------
new room button/post a new message..

ALL the posts/fetches/puts... etc...

All that's left is the crying.


const [rooms, setRooms] = useState([]);
const [msgs, setMsgs] = useState([]);


async function submitMsg(user, text, room) {
  const newMsg = {user, msg, room_assoc};
  const response = await fetch(`/api_v1/chat/msgs/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder),
  }).catch(console.log('Something went wrong'));
  if (response.ok){
        console.log('Message Submitted!');
  }
}

user
text = models.TextField()
room_assoc = 


async function fetchRooms(){
    const response = await fetch('https://127.0.0.1/api_v1/rooms/')
    if (response.ok){
        const data = await response.json();
        setRooms(data);
        console.log(rooms);
    }
}

async function fetchRooms(){
    const response = await fetch('https://127.0.0.1/api_v1/msgs/')
    if (response.ok){
        const data = await response.json();
        setMsgs(data);
        console.log(msgs);
    }
}



   
*/