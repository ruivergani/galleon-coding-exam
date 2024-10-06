'use client';
import { useState, useEffect } from 'react';

interface Favorites {
  [key: string]: string[];
}

interface ClientFavoritesProps {
  image: string;
  breed: string;
}

export default function ClientFavorites({image, breed} : ClientFavoritesProps) {

  const [favorites, setFavorites] = useState<string[]>([]); // Array of favorite images URLs

  // Get the 'favorites' from localStorage, ensuring a string is passed to JSON.parse
  useEffect(() => {
    const storedFavorites: Favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setFavorites(storedFavorites[breed] || []);
  }, [breed]);

  // Add or remove an image from the list of favorite images for the current breed
  const handleFavorites = () => {
    // Check if exists -> if exists (filter removes) - if not add to the list (using spread operator)
    const updatedFavorites = favorites.includes(image) ? favorites.filter(item => item !== image) : [...favorites, image]

    setFavorites(updatedFavorites)

    // Retrieve and update the 'favorites' in localStorage
    const storedFavoritesRaw = localStorage.getItem('favorites');
    const storedFavorites: Favorites = storedFavoritesRaw ? JSON.parse(storedFavoritesRaw) : {}; // Fallback to empty object
    storedFavorites[breed] = updatedFavorites;

    localStorage.setItem('favorites', JSON.stringify(storedFavorites));
  }

  return (
    <button onClick={handleFavorites}>
      {favorites.includes(image) ? 'Unlike' : 'Like'}
    </button>
  )
}
