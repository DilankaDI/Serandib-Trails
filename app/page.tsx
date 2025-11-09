// import Carousel from "@/components/Carousel";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedTrips from "@/components/FeaturedTrips";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <main>
      {/* <Carousel /> */}
      <HeroVideo />
      <FeaturedTrips />
      <CustomerReviews />
    </main>
  );
}
