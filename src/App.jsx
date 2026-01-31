import { useState } from "react";
import {ChatInput} from './Components/ChatInput'
import {ChatMessages} from './Components/ChatMessages'

import './App.css'

function App(){
  const[chatMessages, setChatMessages] = useState([
    {
    Message:"hello",
    sender:"user",
    id:"1"

  },
  {
    Message:"Hello! How can I help you?",
    sender:"robot",
    id:"2"

  },
  {
    Message:"can you get me todays date?",
    sender:"user",
    id:"3"

  },
  {
    Message:"Today is September 27",
    sender:"robot",
    id:"4"

  },

])




return(
  <div className="app-container">
<ChatMessages
chatMessages = {chatMessages}
/>
    <ChatInput
    chatMessages={chatMessages}
      setChatMessages={setChatMessages}
    />
  </div>
)
}

export default App;