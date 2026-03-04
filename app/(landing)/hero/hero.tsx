import Container from "@/components/container";
import Section from "@/components/section";
import HeroCta from "./hero-cta";
import InfoSection from "./info-section";
// h-[calc(100dvh-69px)
const HeroSection = () => {
  return (
    <Section className="relative grid  place-content-center  py-20 lg:py-30">
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/2 -top-32 h-112 w-md -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-96 w-[24rem] rounded-full bg-purple-400/20 blur-3xl" />
      </div>
      <Container className=" text-center ">
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Track tasks & meetings.{" "}
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Let AI do the rest.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Automatically summarize meetings, extract action items, and keep every
          task in sync — so you can focus on what actually matters.
        </p>

        <HeroCta />
        <InfoSection />
      </Container>
    </Section>
  );
};

export default HeroSection;
