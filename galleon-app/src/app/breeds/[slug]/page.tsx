import getBreedImages from "@/app/methods/getBreedsImage";
import ContainerGrid from "@/components/container"
import { Suspense } from "react"
import Image from "next/image"

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
        <div>
          {
            imagesBreed.length > 0 ? (
              imagesBreed.map((image) => (
                <Image src={image} key={image} alt="Dog breed" width={500} height={300} />
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
