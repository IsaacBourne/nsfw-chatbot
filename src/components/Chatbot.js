import React, { useState } from 'react';

const Chatbot = ({ name, onMessageSend }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    onMessageSend(message, name);
    setMessage('');
  };

  return (
    <div className="chatbot">
      <h3>{name}</h3>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder={`Message to ${name}`} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
