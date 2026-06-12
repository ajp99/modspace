import { Navbar } from "@/components/sections/Navbar";
import { GalleryHero } from "@/components/sections/gallery-page/GalleryHero";
import { FilteredGallery } from "@/components/sections/gallery-page/FilteredGallery";
import { ContactBanner } from "@/components/sections/gallery-page/ContactBanner";
import { Footer } from "@/components/sections/Footer";

export default function GalleryPage() {
  return (
    <main className="bg-[var(--color-dark-primary)] min-h-screen flex flex-col">
      <Navbar />
      <GalleryHero />
      <FilteredGallery />
      <ContactBanner />
      <Footer />
    </main>
  );
}
