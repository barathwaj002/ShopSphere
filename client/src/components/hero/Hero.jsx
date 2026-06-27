import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import FloatingProducts from "./FloatingProducts";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">

      <BackgroundEffects />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

        <HeroContent />

        <FloatingProducts />

      </div>

    </section>
  );
}

export default Hero;