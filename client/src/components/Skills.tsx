import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-skills-heading">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {skillCategories.map((cat, idx) => (
            <Card key={idx} className="p-4 xs:p-6" data-testid={`card-skill-category-${idx}`}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3" data-testid={`text-skill-category-${idx}`}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <Badge key={skillIdx} variant="secondary" className="text-xs" data-testid={`badge-skill-${idx}-${skillIdx}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
