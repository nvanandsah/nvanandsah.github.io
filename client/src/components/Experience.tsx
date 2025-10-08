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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-experience-heading">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-4 xs:p-6 border-l-4 border-l-primary" data-testid={`card-experience-${idx}`}>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg xs:text-xl font-bold mb-2" data-testid={`text-company-${idx}`}>
                    {exp.company}
                  </h3>
                  {exp.positions.map((pos, posIdx) => (
                    <div key={posIdx} className="flex flex-col xs:flex-row xs:justify-between gap-1 mb-1.5">
                      <p className="font-semibold text-sm xs:text-base text-primary" data-testid={`text-position-${idx}-${posIdx}`}>
                        {pos.title}
                      </p>
                      <p className="text-xs xs:text-sm text-muted-foreground" data-testid={`text-period-${idx}-${posIdx}`}>
                        {pos.period}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="flex gap-2 text-xs xs:text-sm" data-testid={`text-achievement-${idx}-${achIdx}`}>
                      <span className="text-primary mt-1">↳</span>
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
