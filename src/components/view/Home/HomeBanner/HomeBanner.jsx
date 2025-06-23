import { ReusableCarousel } from "@/components/shared/ReusableCarousel/ReusableCarousel";
import Image from "next/image";


const images = [
  "https://img.freepik.com/free-photo/top-view-natural-cosmetics-with-copy-space_23-2148578659.jpg",
  "https://img.freepik.com/free-photo/horizontal-banner-cosmetic-products-with-avocado_23-2149446587.jpg",
  "https://img.freepik.com/free-vector/cosmetic-series-with-wild-berries-realistic_88138-199.jpg",
  "https://img.freepik.com/premium-photo/creative-cosmetics-composition-advertisement-commercial-photoshoot_950002-54660.jpg",
];

export default function HomeBanner() {
  return (
    <div className="w-full">
      <ReusableCarousel showButtons={false}>
        {images.map((src, idx) => (
          <div key={idx} className="h-[300px] sm:h-[400px] w-full relative overflow-hidden">
            <Image
              src={src}
              alt={`Banner ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </ReusableCarousel>
    </div>
  );
}
