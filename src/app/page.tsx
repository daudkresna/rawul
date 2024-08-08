import BreedSection from "./components/breedSection";
import HeroSection from "./components/heroSection";

export default async function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <BreedSection />
    </>
  );
}
