import { useState } from "react";
import {ChatInput} from './Components/ChatInput'
import {ChatMessages} from './Components/ChatMessages'

import './App.css'

function App(){
  const[chatMessages, setChatMessages] = useState([
    

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