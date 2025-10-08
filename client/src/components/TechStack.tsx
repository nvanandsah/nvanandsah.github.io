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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-techstack-heading">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {technologies.map((tech, idx) => {
            const Icon = iconMap[tech.icon.toLowerCase()];
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-3 xs:p-4 rounded-xl bg-card border border-card-border hover-elevate"
                data-testid={`card-tech-${idx}`}
              >
                {Icon && <Icon className="w-8 h-8 xs:w-10 xs:h-10" />}
                <span className="text-xs font-medium text-center" data-testid={`text-tech-name-${idx}`}>
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
