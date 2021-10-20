import { useState } from 'react'
import Cookies from 'js-cookie';

function ChatMessages(props){
    
    const [newText, setNewText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    
    async function deleteMsg(id) {
        const response = await fetch(`/api_v1/chat/msgs/${id}/`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': Cookies.get('csrftoken'),
            },
        });  //.catch(handleError)
        if (!response.ok){
            throw new Error('Network response was not ok')
        }
          const index=props.msgs.findIndex(msg => msg.id === id);
          const remainingMsgs = [...props.msgs];
          remainingMsgs.splice(index, 1);
          props.setMsgs(remainingMsgs);
    }
    
    async function editMsg(id, newText){
        const index = props.msgs.findIndex(msg => msg.id === id);
        const updatedMsgs = [...props.msgs];
        updatedMsgs[index].text = newText;
        props.setMsgs(updatedMsgs);
        const response = await fetch(`/api_v1/chat/msgs/${id}/`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
          },
          body: JSON.stringify(updatedMsgs[index]),
        })  //.catch(handleError);
        if (!response.ok){
            throw new Error('Network response was not ok')
        } 
    }
    
    function handleChange(event){
        setNewText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        editMsg(props.id, newText);
        setNewText(newText);
        setIsEditing(false);
    }
    
    const editHTML = (
        <form onSubmit={handleSubmit}>
                <input type="text" name="newText" value={newText} onChange={handleChange} />
                <button type="submit">Update</button>
        </form>
    );

    const messageHTML = (
        <div>
            <p><span className="user mt-4">{props.sender}</span></p>
            <p className="message">{props.text}</p>
            <button type="button" onClick={() => setIsEditing(true)} >Edit</button>
            <button type="button" onClick={() => deleteMsg(props.id)}> Delete </button>
        </div>
    )
        
    return(
        <li> {isEditing ? editHTML: messageHTML}</li>
    )
}

export default ChatMessages








/*

 




*/