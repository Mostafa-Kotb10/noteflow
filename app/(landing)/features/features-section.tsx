import Section from '@/components/section';
import Container from '@/components/container';
import FeatureCards from './feature-cards';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
  return (
    <Section className="py-30">
      <Container className='grid grid-cols-1 gap-20 lg:grid-cols-2' >
        <div className='text-center lg:text-start space-y-6 lg:max-w-md'>
          <h2 className="text-4xl font-bold text-gray-900">
            Boost Your Team’s Productivity
          </h2>
          <p className="text-gray-600 text-lg">
            Organize tasks, collaborate in real-time, and track progress effortlessly. TeamFlow helps your team stay aligned and achieve more — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Button>
              Get Started
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <FeatureCards />
      </Container>
    </Section>
  )
}

export default FeaturesSection;