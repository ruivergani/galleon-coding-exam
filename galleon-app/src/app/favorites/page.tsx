'use client'
import ContainerGrid from "@/components/container";
import { useEffect, useState } from "react";

/*
Features:
- Display liked images: Retrieve favorites from localStorage.
- Show breed for each image: Each image will display the breed it belongs to.
- Filter by breed: Use a dropdown to filter images by breed.
*/

interface Favorites{
  [breed: string]: string[];
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<Favorites>({}); // State to store all favorites (localStorage)
  const [filteredBreed, setFilteredBreed] = useState<string>("");
  const [filteredImages, setFilteredImages] = useState<string[]>([]); // State to store filtered images

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "{}") as Favorites;
    setFavorites(storedFavorites);
  }, []);

  // Handle breed filtering
  useEffect(() => {
    if (filteredBreed) {
      setFilteredImages(favorites[filteredBreed] || []); // Show only selected breed's images
    } else {
      // Show all images if no breed is selected
      const allImages = Object.values(favorites).flat(); // Flatten all breed images into one array
      setFilteredImages(allImages);
    }
  }, [filteredBreed, favorites]);

  const breeds = Object.keys(favorites); // Get all breeds with favorites

  return (
    <ContainerGrid>
      <h1 className="text-2xl my-5 font-inter font-semibold">Favorite Dog Images</h1>
      {/* Breed Filter Dropdown */}
      <div className="mb-5">
        <label htmlFor="breed-filter" className="mr-3">Filter by Breed:</label>
        <select
          id="breed-filter"
          value={filteredBreed}
          onChange={(e) => setFilteredBreed(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      {/* Grid to Display Favorite Images */}
      <div className="grid grid-cols-4 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="border p-2">
              <img src={image} alt="Favorite Dog" className="w-full h-auto object-cover" />
              <p className="text-center mt-2 text-sm">Breed: {breeds.find((breed) => favorites[breed].includes(image))}</p>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center">No favorite images to display.</p>
        )
        }
      </div>

    </ContainerGrid>
  )
}
