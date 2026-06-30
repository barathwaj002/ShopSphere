import WelcomeSection from "../../components/home/WelcomeSection";
import HeroBanner from "../../components/home/HeroBanner";
import FeaturedCategories from "../../components/home/FeaturedCategories";
import BestSellerSection from "../../components/home/BestSellerSection";
import NewArrivalSection from "../../components/home/NewArrivalSection";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Newsletter from "../../components/home/Newsletter";

import Hero from "../../components/hero/Hero";
import FeaturedProducts from "./FeaturedProducts";

function Home() {
  return (
    <>
      <WelcomeSection />

      <HeroBanner />

      <FeaturedCategories />

      <BestSellerSection />

      <NewArrivalSection />

      <Hero />

      <FeaturedProducts />

      <WhyChooseUs />

      <Newsletter />
    </>
  );
}

export default Home;