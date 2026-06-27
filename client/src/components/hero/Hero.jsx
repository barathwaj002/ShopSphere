import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">

      <BackgroundEffects />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <HeroContent />

      </div>

    </section>
  );
}

export default Hero;