function RoomNavButtons(props){
    function handleClick3(event){
            props.setSelection(props.value);
            const $buttons = document.querySelectorAll('button');
            $buttons.forEach(button => {button.style.border="none";
            button.style.background="white";})
            let target = event.target;
            target.style.border="dashed black 2px"
            target.style.background="rgba(0,0,0,0.1)"       
    }
    
    return(
        <>
            <button className="nav-button btn" type="button" key={props.value} onClick={handleClick3}>&#8212; {props.value} &#8212;</button>
        </>
    )
}

export default RoomNavButtons