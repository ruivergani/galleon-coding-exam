// Function Get All Breeds
const BASE_URL = 'https://dog.ceo/api';

// TS type for API response
interface BreedsResponse {
  message: Record<string, string[]>; // message object - keys (breed names) - values (arrays of sub-breeds)
  status: string;
}

export default async function getListBreeds(): Promise<BreedsResponse>{
  const response = await fetch(`${BASE_URL}/breeds/list/all`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Await JSON parsing
  const breeds : BreedsResponse = await response.json();

  return breeds;
}
