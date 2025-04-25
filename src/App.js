import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import { generateImageFromText } from './services/TextToImageService';
import './App.css';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleSendMessage = (message, chatbotName) => {
    setChatHistory([...chatHistory, { sender: chatbotName, message }]);

    // If the message is a prompt for generating an image
    if (message.toLowerCase().includes('generate image')) {
      const prompt = message.replace('generate image', '').trim();
      generateImageFromText(prompt).then((image) => {
        setImageUrl(image);
        setChatHistory([
          ...chatHistory,
          { sender: 'System', message: 'Here is the generated image:' },
        ]);
      });
    }
  };

  return (
    <div className="app">
      <h1>NSFW Chatbot</h1>
      <div className="chat-container">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`message ${chat.sender}`}>
            <span>{chat.sender}: </span>{chat.message}
          </div>
        ))}
      </div>
      <div className="chatbots">
        <Chatbot name="Bot1" onMessageSend={handleSendMessage} />
        <Chatbot name="Bot2" onMessageSend={handleSendMessage} />
      </div>
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </div>
  );
};

export default App;
