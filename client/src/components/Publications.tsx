import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  publisher: string;
  date: string;
  link?: string;
}

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-publications-heading">
          Publications
        </h2>
        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <Card key={idx} className="p-6 md:p-8 hover-elevate" data-testid={`card-publication-${idx}`}>
              <div className="space-y-2">
                <h3 className="font-bold text-lg" data-testid={`text-pub-title-${idx}`}>
                  {pub.link ? (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {pub.title}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-pub-publisher-${idx}`}>
                  {pub.publisher}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`text-pub-date-${idx}`}>
                  {pub.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
