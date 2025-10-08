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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-projects-heading">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-4 xs:p-6 hover-elevate" data-testid={`card-project-${idx}`}>
              <h3 className="font-bold text-base xs:text-lg mb-2" data-testid={`text-project-title-${idx}`}>
                {project.title}
              </h3>
              <p className="text-xs xs:text-sm text-muted-foreground" data-testid={`text-project-description-${idx}`}>
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
