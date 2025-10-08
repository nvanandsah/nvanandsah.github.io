import { SiPython, SiDjango, SiFlask, SiPostgresql, SiTensorflow, SiKeras, SiAmazon } from "react-icons/si";
import { Code2 } from "lucide-react";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  technologies: TechItem[];
}

const iconMap: Record<string, any> = {
  python: SiPython,
  django: SiDjango,
  flask: SiFlask,
  sql: SiPostgresql,
  tensorflow: SiTensorflow,
  keras: SiKeras,
  aws: SiAmazon,
  api: Code2
};

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-techstack-heading">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => {
            const Icon = iconMap[tech.icon.toLowerCase()];
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-card-border hover-elevate"
                data-testid={`card-tech-${idx}`}
              >
                {Icon && <Icon className="w-12 h-12 text-primary" />}
                <span className="text-sm font-medium text-center" data-testid={`text-tech-name-${idx}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
