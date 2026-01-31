
import { ChatMessage } from './ChatMessage';
import { useRef,useEffect } from 'react';

export function ChatMessages({ chatMessages }) {

  const chatMessageRef = useRef(null);

  useEffect(()=>{
    const containerElem = chatMessageRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  })

  return (
    <div class="chat-message-container"
      ref={chatMessageRef}
    >

      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.Message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  )

}

