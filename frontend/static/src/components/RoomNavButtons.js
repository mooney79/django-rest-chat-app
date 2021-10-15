function RoomNavButtons(props){
    function handleClick(event){
        // if (props.selection === props.value){
        //     props.setSelection('all');
        // } else {
            props.setSelection(props.value);
            const $buttons = document.querySelectorAll('button');
            $buttons.forEach(button => {button.style.border="none";
                button.style.background="white";})
            const $newRoom = document.getElementById("new-room");
            $newRoom.style.background="black";
            let target = event.target;
            target.style.border="dashed black 2px"
            target.style.background="rgba(0,0,0,0.1)"
            

        // }
    }
    // if (props.selection = props.value){
    //     //Do something to make it highlighted somehow?
    // }


    return(
        <>
            <button className="nav-button btn" type="button" key={props.value} onClick={handleClick}>&#8212; {props.value} &#8212;</button>
        </>
    )
}

export default RoomNavButtons

/*
<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
</div>



*/