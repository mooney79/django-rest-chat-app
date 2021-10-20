import ChatMessages from "./ChatMessages";


function Chatroom(props){
    let roomMessages=props.msgs.filter(msg => props.selection === msg.room_assoc);
    let RoomHTML = roomMessages.map(roomMsg => <ChatMessages key={roomMsg.id} {...roomMsg} msgs={props.msgs} setMsgs={props.setMsgs} />)
    
    return(
        <div className="chatroom col-12">
            {RoomHTML}
        </div>
    )
}

export default Chatroom