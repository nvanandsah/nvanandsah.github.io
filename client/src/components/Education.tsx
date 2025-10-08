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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-education-heading">
          Education
        </h2>
        <div className="space-y-3">
          {education.map((edu, idx) => (
            <Card key={idx} className="p-4 xs:p-6" data-testid={`card-education-${idx}`}>
              <div>
                <h3 className="text-lg xs:text-xl font-bold mb-2" data-testid={`text-degree-${idx}`}>
                  {edu.degree}
                </h3>
                <p className="font-medium text-sm xs:text-base text-primary mb-1" data-testid={`text-institution-${idx}`}>
                  {edu.institution}
                </p>
                <p className="text-xs xs:text-sm text-muted-foreground mb-2" data-testid={`text-edu-period-${idx}`}>
                  {edu.period}
                </p>
                {edu.description && (
                  <p className="text-xs xs:text-sm" data-testid={`text-edu-description-${idx}`}>
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
