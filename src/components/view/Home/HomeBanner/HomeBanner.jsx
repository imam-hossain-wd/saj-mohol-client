import { ReusableCarousel } from "@/components/shared/ReusableCarousel/ReusableCarousel";
import Image from "next/image";


const images = [
  "https://img.freepik.com/premium-photo/creative-cosmetics-composition-advertisement-commercial-photoshoot_950002-54660.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/cosmetic-banner_46857-549.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/free-vector/cosmetics-beauty-products-makeup-sale-banner-with-glowing-neon-background-pink-sparkles_33099-1429.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/free-vector/cosmetic-series-with-wild-cornflower-realistic_88138-228.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/premium-vector/summer-must-have-products-geometric-background-with-tropical-leaves-3d-illustration_317810-2533.jpg?ga=GA1.1.722794647.1750693050&semt=ais_items_boosted&w=740",
];

export default function HomeBanner() {
  return (
    <div className="w-full mt-5">
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


