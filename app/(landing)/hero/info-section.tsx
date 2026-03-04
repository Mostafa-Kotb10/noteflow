import Container from "@/components/container";
import Section from "@/components/section";

export default function InfoSection() {
    return (
      <Section className="w-full mt-5">
        <Container className=" max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center text-center divide-x divide-gray-300">
            
            <div className="px-6">
              <p className="text-md md:text-lg font-semibold">
                Trusted by over 40k people
              </p>
            </div>
  
            <div className="px-6">
              <p className="text-md md:text-lg font-semibold">
                Integrated AI features
              </p>
            </div>
  
            <div className="px-6">
              <p className="text-md md:text-lg font-semibold">
                Built for modern teams
              </p>
            </div>

          </div>
          </Container>
      </Section>
    )
  }