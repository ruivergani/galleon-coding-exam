'use-client'
import * as React from 'react';
import ContainerGrid from "@/components/container";
import type { Metadata } from "next";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getListBreeds from './methods/getListBreeds';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Home | Dog API App",
  description: "This is the home page metadata.",
  openGraph: {
    title: 'This is the home page.',
    description: 'This is the description of the page home',
    url: "https://ruivergani.com",
    type: "website",
  },
};

export default async function Home() {
  const allBreeds = await getListBreeds();

  // Extract breed names from the 'message' object
  const breedNames = Object.keys(allBreeds.message); // returns an array of the object's keys

   // Handle the case where breedNames is empty
   if (!breedNames || breedNames.length === 0) {
    return <p>No breeds found</p>;
  }

  return (
    <main className="py-10">
      <ContainerGrid className="grid grid-cols-1 gap-8 items-start justify-items-center @tablet:grid-cols-3 @desktop:grid-cols-4">
        {
          breedNames.map((breed : string) => (
            <Link key={breed} href={`/breeds/${breed}`} passHref>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 16 }} className='flex items-center justify-start gap-3'>
                    Name: {breed}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Check Breed</Button>
                </CardActions>
              </Card>
            </Link>
          ))
        }
      </ContainerGrid>
    </main>
  );
}
