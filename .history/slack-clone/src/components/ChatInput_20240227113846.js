import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import { db, auth } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';

function CheatInput({channelName, channelId, chatRef}) {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();//preventDefault refresh

        if(!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            // user: 'han',
            // userImage: 'https://via.placeholder.com/300.jpg'
            user: user.displayName,
            userImage: user.photoURL
        });


        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });


        setInput('');
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default CheatInput;

const ChatInputContainer = styled.div`
         border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray:
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
`