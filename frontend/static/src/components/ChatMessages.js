import {useEffect, useState, render } from 'react'
import Cookies from 'js-cookie';

function ChatMessages(props){
    let poster='nawp';

    // async function fetchPoster(user){
    //     const response = await fetch(`/rest-auth/user/${user}/`,
    //     {headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': Cookies.get('csrftoken')
    //     }} );    
    //     if (response.ok){
    //         const data = await response.json();
    //         poster = data.username;
    //         // console.log(data);
    //         // console.log(poster);        
    //     } 
    // }

    // poster = fetchPoster(props.sender);
  
    // useEffect(() => {
    //     console.log(poster)
    //     },[]);

    //  setTimeout(() => {
    //      // console.log(props);
    //      console.log(poster);
    //  }, 500)
    return(
        <div>
            <p><span className="user mt-4">{props.sender}</span></p>
            <p className="message">{props.text}</p>
        </div>
    )
}

export default ChatMessages








/*


{poster}
  // console.log(props.user)
    // async function fetchPoster(){
    //     const response = await fetch(`/admin/auth/user/${props.user}/`)
    //     if (response.ok){
    //         const data = await response.json();
    //         console.log(data);
    //         // console.warn(xhr.responseText)
    //     }
    // }

*/