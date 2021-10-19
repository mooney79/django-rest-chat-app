import {useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import Cookies from 'js-cookie';

function InputField(props){
    const [message, setMessage] = useState('');
    const sender = props.user.pk;

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleClick(){
        console.log(message)
        // console.log(poster)
        submitMsg(props.selection, sender, message);
        
        setMessage('');
    }

  
    async function submitMsg(selection, poster, text) {
        const newMsg = {room_assoc: selection, sender: props.user.pk, text: text };
        console.log(newMsg);
        console.log(sender)
        console.log(props)
        // const updatedMsgs = [...props.msgs]
        
        console.log(props.msgs);
        const response = await fetch(`/api_v1/chat/msgs/`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify(newMsg),
        }).catch(console.log('Something went wrong'));
        if (response.ok){
              console.log('Message Submitted!');
              props.setMsgs([newMsg, ...props.msgs]);
        }
    }
    




    return(
    <InputGroup>        
        <FormControl as="textarea" aria-label="With textarea" name="message" 
                    onChange={handleChange}
                    value={message}/>
        <InputGroup.Text onClick={handleClick}>Send</InputGroup.Text>
    </InputGroup>
    )
}

export default InputField