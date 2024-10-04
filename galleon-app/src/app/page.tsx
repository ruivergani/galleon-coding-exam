import ContainerGrid from "@/components/container";
import type { Metadata } from "next";

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

export default function Home() {
  return (
    <main className="py-10">
      <ContainerGrid className="grid grid-cols-4 gap-8 items-start justify-items-center">
        <div>
          item
        </div>
        <div>
          item
        </div>
        <div>
          item
        </div>
        <div>
          item
        </div>
      </ContainerGrid>
    </main>
  );
}
