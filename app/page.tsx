import CustomerReviews from "@/components/CustomerReviews";
import FeaturedTrips from "@/components/FeaturedTrips";
import HeroVideo from "@/components/HeroVideo";
import AirportTransfer from "@/components/AirportTransfer";

export default function Home() {

    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Soul Of Lanka',       // <--- CHANGE THIS: The name you want Google to display
    // alternateName: 'YBN',          // <--- OPTIONAL: An abbreviation users might search for
    url: 'https://souloflanka.com', // <--- CHANGE THIS: Your actual Homepage URL
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <Carousel /> */}

      <HeroVideo />
      <AirportTransfer />
      <FeaturedTrips />
      <CustomerReviews />
    </main>
  );
}
