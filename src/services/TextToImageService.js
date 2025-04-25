export const generateImageFromText = async (text) => {
  try {
    const response = await fetch('http://localhost:5000/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const result = await response.json();
      return result.imageUrl;
    } else {
      console.error('Error generating image');
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
