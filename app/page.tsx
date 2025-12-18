// import Carousel from "@/components/Carousel";
import CustomerReviews from "@/components/CustomerReviews";
import FeaturedTrips from "@/components/FeaturedTrips";
import HeroVideo from "@/components/HeroVideo";
import AirportTransfer from "@/components/AirportTransfer";

export default function Home() {
  return (
    <main>
      {/* <Carousel /> */}
      <HeroVideo />
      <AirportTransfer />
      <FeaturedTrips />
      <CustomerReviews />
    </main>
  );
}
