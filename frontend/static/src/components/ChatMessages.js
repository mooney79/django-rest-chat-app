function ChatMessages(props){
    return(
        <div>
            <span className="user mt-4">{props.user}</span>
            <p className="message">{props.body}</p>
        </div>
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


*/