import {useState} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';

function InputField(props){
    const [message, setMessage] = useState('');

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleClick(){
        console.log(message)
        props.submitMsg(props.selection, message);
        
        setMessage('');
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