import Robotimage from '../assets/robot.jpg';
import Userimage from '../assets/user.png';
import './ChatMessage.css';




export function ChatMessage({ message, sender }) {


  return (
    <div class={sender=== "user"?"chat-message-user":"chat-message-robot"}>

      {sender == "robot" &&
        (<img src={Robotimage} alt="user" class="chat-message-profile" />)}
  <div class="chat-message-text">
      {message}
</div>
      {sender == "user" &&
        (<img src={Userimage} alt="user" class="chat-message-profile" />)}


    </div>

  );
}
