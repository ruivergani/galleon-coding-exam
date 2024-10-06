import getBreedImages from "@/app/methods/getBreedsImage";
import ContainerGrid from "@/components/container"
import { Suspense } from "react"
import Image from "next/image"
import ClientFavorites from "@/app/components/favorites";

interface Params {
  slug: string;
}
interface PageDetailsProps{
  params: Params
}

export default async function PageDetails({ params: { slug } } : PageDetailsProps) {
  const imagesBreed = await getBreedImages(slug);

  console.log(imagesBreed)

  return (
    <ContainerGrid>
      <h1 className="text-2xl my-5 font-inter font-semibold">Breed Details</h1>
      <Suspense fallback={<p className="w-full h-full text-center text-3xl">Loading images...</p>}>
        <div className="grid grid-cols-4">
          {
            imagesBreed.length > 0 ? (
              imagesBreed.map((image) => (
                <div key={image}>
                  <Image src={image} alt="Dog breed" width={500} height={300} />
                  {/* Client-side favorites component */}
                  <ClientFavorites image={image} breed={slug} />
                </div>
              ))
            ) : (
              <p>No images available for this breed.</p> // Handle empty array gracefully
            )
          }
        </div>
      </Suspense>
    </ContainerGrid>
  )
}
