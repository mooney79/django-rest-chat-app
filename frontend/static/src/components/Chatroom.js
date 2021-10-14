function Chatroom(){
    return(
        <div className="chatroom">This is a chatroom.</div>
    )
}

export default Chatroom

/*
So... this is just like Menu, only instead of showing menu items, it will be showing
messages filtered by which room is currently selected.
Easy peasy.< /sarcasm>


import MenuItem from "./MenuItem";

function MenuList(props){

    // const MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} />);

    let MenuHTML;
    let shownItems=[{}];
    if (props.selection === "all"){
        MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} order={props.order} setOrder={props.setOrder}/>);
    } 
    else {
        shownItems = props.Menu.filter(food => props.selection === food.category);

        MenuHTML = shownItems.map(shownItem => <MenuItem key={shownItem.name} {...shownItem} order={props.order} setOrder={props.setOrder}/>);
    }

    return (
        <ul className="mainpane">
                {MenuHTML}
        </ul>
    )
}

export default MenuList;



   




*/