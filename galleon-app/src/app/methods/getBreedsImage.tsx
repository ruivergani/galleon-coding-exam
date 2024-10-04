// Function Get All Breeds
const BASE_URL = 'https://dog.ceo/api';

interface BreedsResponse {
  message: string[]; // Array of images
  status: string;
}

export default async function getBreedImages(breed : string): Promise<string[]>{
  const response = await fetch(`${BASE_URL}/breed/${breed}/images`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Await JSON parsing
  const breeds : BreedsResponse = await response.json();

  // Ensure that breeds.message is an array
  return Array.isArray(breeds.message) ? breeds.message : [];
}
