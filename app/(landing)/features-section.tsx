import Section from '@/components/section'

import gsap from "gsap"

const FeaturesSection = () => {
    
  return (
    <Section className="py-20 ">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Powerful Features Built for Growth
    </h2>
    <p className="text-gray-600 mb-12">
      Everything you need to scale smarter and faster.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">Smart Automation</h3>
        <p className="text-gray-600 text-sm">
          Automate repetitive tasks with AI-driven workflows.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">Real-time Analytics</h3>
        <p className="text-gray-600 text-sm">
          Get instant insights into your performance.
        </p>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="font-semibold mb-2">Team Collaboration</h3>
        <p className="text-gray-600 text-sm">
          Work together seamlessly across projects.
        </p>
      </div>
    </div>
  </div>
</Section>
  )
}

export default FeaturesSection