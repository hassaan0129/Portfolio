import { Hero } from "@/components/sections/Hero";
import { Agitation } from "@/components/sections/Agitation";
import { Work } from "@/components/sections/Work";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Agitation />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}