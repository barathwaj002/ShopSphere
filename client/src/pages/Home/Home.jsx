import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";
import SectionTitle from "../../components/common/SectionTitle";

function Home() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-10 px-6">

      <Logo />

      <SectionTitle
        title="Premium Shopping Experience"
        subtitle="Experience the future of online shopping with beautifully designed products and lightning-fast performance."
      />

      <div className="flex gap-5">

        <Button>
          Explore Collection
        </Button>

        <Button variant="secondary">
          Learn More
        </Button>

      </div>

    </section>
  );
}

export default Home;