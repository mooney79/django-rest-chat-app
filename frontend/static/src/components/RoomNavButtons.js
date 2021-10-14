function RoomNavButtons(props){
    function handleClick(event){
        // if (props.selection === props.value){
        //     props.setSelection('all');
        // } else {
            props.setSelection(props.value);
        // }
    }
    return(
        <>
            <button className="nav-button" type="button" key={props.value} onClick={handleClick}>{props.value}</button>
        </>
    )
}

export default RoomNavButtons