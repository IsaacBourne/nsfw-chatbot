import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Laden des Chatverlaufs, wenn die App geöffnet wird
    const loadChatHistory = async () => {
      const history = await AsyncStorage.getItem('chatHistory');
      if (history) {
        setChatHistory(JSON.parse(history));
      }
    };
    loadChatHistory();
  }, []);

  const sendMessage = async () => {
    const newChatHistory = [...chatHistory, { user: 'You', message }];
    setChatHistory(newChatHistory);

    // Speichern des Chatverlaufs lokal
    await AsyncStorage.setItem('chatHistory', JSON.stringify(newChatHistory));
    setMessage('');
  };

  return (
    <View>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
      
      <View>
        {chatHistory.map((chat, index) => (
          <Text key={index}>
            {chat.user}: {chat.message}
          </Text>
        ))}
      </View>
    </View>
  );
}
