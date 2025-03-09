import { Routes, Route, useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Bug, BookOpen, Blocks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Playground from '@/pages/Playground';
import Dashboard from '@/pages/Dashboard';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              CodeGenie
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Your AI-Powered Coding Assistant
            </p>
            <Button size="lg" className="group" onClick={() => navigate('/playground')}>
              Try CodeGenie
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Code Generation"
              description="Generate high-quality code snippets instantly with AI assistance"
            />
            <FeatureCard
              icon={<Bug className="h-8 w-8" />}
              title="AI Debugging"
              description="Identify and fix bugs in your code with intelligent analysis"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Code Explanation"
              description="Get detailed explanations of complex code segments"
            />
            <FeatureCard
              icon={<Blocks className="h-8 w-8" />}
              title="Library Suggestions"
              description="Discover and integrate the best libraries for your project"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Enter Your Prompt"
              description="Describe what you want to achieve in plain English"
            />
            <StepCard
              number={2}
              title="AI Processing"
              description="Our AI analyzes your request and generates optimal solutions"
            />
            <StepCard
              number={3}
              title="Get Your Code"
              description="Receive production-ready code with explanations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Coding Experience?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of developers using CodeGenie to code smarter, not harder.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="group bg-background hover:bg-background/90"
            onClick={() => navigate('/dashboard')}
          >
            Get Started for Free
            <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function StepCard({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 relative hover:shadow-lg transition-shadow">
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 mt-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default App;