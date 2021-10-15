import ChatMessages from "./ChatMessages";

function Chatroom(props){
    // const MessageHTML = props.msgs.map(msg => <ChatMessages key={msg.time_created} {...msg} />);
    let roomMessages=props.msgs.filter(msg => props.selection === msg.room_assoc);
    let RoomHTML = roomMessages.map(roomMsg => <ChatMessages key={roomMsg.time_created} {...roomMsg} />);
    return(
        <div className="chatroom col-10">
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
text field/for, to submit new messages
new room button
ALL the posts/fetches/puts... etc...


   
*/