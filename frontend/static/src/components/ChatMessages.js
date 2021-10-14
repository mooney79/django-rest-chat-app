function ChatMessages(){
    return(
        <div>I'm a message!</div>
    )
}

export default ChatMessages


/*

// import Order from "./Order";

function MenuItem(props){
    function handleClick(event){
        const newOrderItem = {name: props.name, priceStr: props.priceStr, priceCents: props.priceCents, category: props.category};
        props.setOrder([...props.order, newOrderItem]);
    }
    return (
        <li>
            <div className="menu-line">
                <span>{props.name}</span>
                <div className="line-end">
                    <span>{props.priceStr}</span>
                    <button type="button" onClick={handleClick} name={props.name}>+</button>
                </div>
            </div>
            
        </li>
    )
}

export default MenuItem;

//Putting the same item in twice creates two of the same key, since key is based off name
//So I need to add a quantity aspect as well.
//Crapstick.
//I was hoping to avoid that.  Still, it's more professional.
// https://django-restaurant-api-mooney79.herokuapp.com/api_v1/orders/

*/