
import { useState } from 'react'
import './ChatInput.css'
import { Chatbot } from 'supersimpledev';





export function ChatInput({chatMessages,setChatMessages}){

  const[inputText,setInputText]= useState('');

function SaveInputText(event){
setInputText(event.target.value);
}

function SendMessage(){
const NewChatMessages= ([
  ...chatMessages,
  {
    Message:inputText,
    sender:"user",
    id: crypto.randomUUID
  }
])

setChatMessages(NewChatMessages)
setInputText("");




const response = Chatbot.getResponse(inputText);

setChatMessages([
  ...NewChatMessages,
  {
    Message:response,
    sender:"robot",
    id:crypto.randomUUID
  }
])

}





  return(
    <div className="chat-input-container">
      <input
      placeholder="Ask me anything"
      size={30}
      className='chat-input'
      onChange={SaveInputText}
      value={inputText}

      
      />
      <button
      onClick={SendMessage}
      className='send-button'
      >Send</button>
    </div>
  )

}