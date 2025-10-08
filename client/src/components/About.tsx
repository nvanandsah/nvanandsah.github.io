import { Card } from "@/components/ui/card";

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-about-heading">
          About
        </h2>
        <Card className="p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed" data-testid="text-about-content">
            {summary}
          </p>
        </Card>
      </div>
    </section>
  );
}
