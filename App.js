import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ImageUpload from './components/ImageUpload';
import Chat from './components/Chat';

export default function App() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text>Welcome to the NSFW Chatbot App</Text>
      <ImageUpload />
      <Chat />
    </ScrollView>
  );
}
