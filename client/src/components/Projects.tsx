import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-projects-heading">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-6 md:p-8 hover-elevate" data-testid={`card-project-${idx}`}>
              <h3 className="font-bold text-xl mb-3" data-testid={`text-project-title-${idx}`}>
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground" data-testid={`text-project-description-${idx}`}>
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
