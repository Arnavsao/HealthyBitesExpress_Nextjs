import Image from "next/image";
import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { CardStackDemo } from "@/components/CardStackDemo"; // Import CardStackDemo
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <Herosection />
      <FeaturedCourses />
      <CardHoverEffectDemo/>
      {/* Adding the CardStackDemo Component */}
      <section className="py-10 pr-36">
        <CardStackDemo />
      </section>
      <BackgroundBoxesDemo/>




      
    </main>
  );
}