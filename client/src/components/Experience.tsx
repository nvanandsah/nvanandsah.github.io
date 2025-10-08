import { Card } from "@/components/ui/card";

interface Position {
  title: string;
  period: string;
}

interface ExperienceItem {
  company: string;
  positions: Position[];
  achievements: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-experience-heading">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-6 md:p-8 border-l-4 border-l-primary" data-testid={`card-experience-${idx}`}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3" data-testid={`text-company-${idx}`}>
                    {exp.company}
                  </h3>
                  {exp.positions.map((pos, posIdx) => (
                    <div key={posIdx} className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                      <p className="font-semibold text-primary" data-testid={`text-position-${idx}-${posIdx}`}>
                        {pos.title}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-period-${idx}-${posIdx}`}>
                        {pos.period}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="flex gap-3 text-sm md:text-base" data-testid={`text-achievement-${idx}-${achIdx}`}>
                      <span className="text-primary mt-1.5">↳</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
