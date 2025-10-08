import { Card } from "@/components/ui/card";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-education-heading">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <Card key={idx} className="p-6 md:p-8" data-testid={`card-education-${idx}`}>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" data-testid={`text-degree-${idx}`}>
                  {edu.degree}
                </h3>
                <p className="font-medium text-primary mb-1" data-testid={`text-institution-${idx}`}>
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mb-3" data-testid={`text-edu-period-${idx}`}>
                  {edu.period}
                </p>
                {edu.description && (
                  <p className="text-sm md:text-base" data-testid={`text-edu-description-${idx}`}>
                    {edu.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
