import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Users, BarChart3, Globe, Cpu } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized infrastructure and edge computing network.',
    color: 'text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamlessly collaborate with your team using real-time synchronization and intelligent workflow management.',
    color: 'text-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights with comprehensive analytics, custom reports, and predictive intelligence.',
    color: 'text-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Reach customers worldwide with our global infrastructure and multi-region deployment capabilities.',
    color: 'text-indigo-600'
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Leverage machine learning and artificial intelligence to automate tasks and enhance decision-making.',
    color: 'text-rose-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale your business, streamline operations, and stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm hover:bg-background/80"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50 w-fit group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}