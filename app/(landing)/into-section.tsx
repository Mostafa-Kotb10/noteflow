import Section from "@/components/section";

export default function InfoSection() {
    return (
      <Section className="w-full py-10 mt-5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center text-center divide-x divide-gray-300">
            
            <div className="px-6">
              <p className="text-lg font-semibold">
                Trusted by over 40k people
              </p>
            </div>
  
            <div className="px-6">
              <p className="text-lg font-semibold">
                Integrated AI features
              </p>
            </div>
  
            <div className="px-6">
              <p className="text-lg font-semibold">
                Built for modern teams
              </p>
            </div>

          </div>
        </div>
      </Section>
    )
  }