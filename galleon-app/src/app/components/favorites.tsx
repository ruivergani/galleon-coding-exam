'use client';
import { useState, useEffect } from 'react';

interface Favorites {
  [key: string]: string[]; // Each breed will map to an array of favorite image URLs
}

interface ClientFavoritesProps {
  image: string;
  breed: string;
}

export default function ClientFavorites({ image, breed }: ClientFavoritesProps) {
  const [favorites, setFavorites] = useState<string[]>([]); // Start with an empty array for the current breed

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites: Favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setFavorites(storedFavorites[breed] || []); // Load favorites for the current breed
  }, [breed]);

  // Add or remove an image from the list of favorite images for the current breed
  const handleFavorites = () => {
    // Retrieve the latest favorites directly from localStorage
    const storedFavorites: Favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const breedFavorites = storedFavorites[breed] || []; // Ensure we have an array of favorites for this breed

    // Toggle the image in the favorites list: Add if not exists, remove if exists
    const updatedFavorites = breedFavorites.includes(image)
      ? breedFavorites.filter(item => item !== image) // Remove if already in favorites
      : [...breedFavorites, image]; // Add if not in favorites

    // Update the local state
    setFavorites(updatedFavorites);

    // Update the localStorage with the new favorites for the current breed
    storedFavorites[breed] = updatedFavorites; // Only update the current breed's favorites
    localStorage.setItem('favorites', JSON.stringify(storedFavorites));
  };

  return (
    <button onClick={handleFavorites}>
      {favorites.includes(image) ? 'Unlike' : 'Like'}
    </button>
  );
}
