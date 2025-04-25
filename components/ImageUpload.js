import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';

export default function ImageUpload() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    // Frage nach Berechtigungen
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Öffne den ImagePicker
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setImageUri(pickerResult.uri);
      // Optional: Speichern des Bildes lokal
      const fileUri = FileSystem.documentDirectory + 'uploaded_image.jpg';
      await FileSystem.copyAsync({ from: pickerResult.uri, to: fileUri });
    }
  };

  return (
    <View>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {imageUri && <Text>Image selected: {imageUri}</Text>}
    </View>
  );
}
