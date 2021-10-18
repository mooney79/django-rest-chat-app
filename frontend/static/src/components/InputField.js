import {useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';
import Cookies from 'js-cookie';

function InputField(props){
    const [message, setMessage] = useState('');
    // const poster = props.user.username;

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleClick(){
        console.log(message)
        // console.log(poster)
        submitMsg(props.user.pk, message, props.selection);
        
        setMessage('');
    }

  
    async function submitMsg(poster, text, selection) {
        const newMsg = {sender: poster, text: text, room_assoc: selection};
        // const updatedMsgs = [...props.msgs]
        props.setMsgs([newMsg, ...props.msgs]);
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