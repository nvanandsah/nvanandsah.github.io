import { Card } from "@/components/ui/card";

interface AboutProps {
  summary: string;
}

export default function About({ summary }: AboutProps) {
  return (
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-about-heading">
          About
        </h2>
        <Card className="p-4 xs:p-6">
          <p className="text-sm xs:text-base leading-relaxed" data-testid="text-about-content">
            {summary}
          </p>
        </Card>
      </div>
    </section>
  );
}
