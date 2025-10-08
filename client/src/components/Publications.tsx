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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-publications-heading">
          Publications
        </h2>
        <div className="space-y-3">
          {publications.map((pub, idx) => (
            <Card key={idx} className="p-4 xs:p-6 hover-elevate" data-testid={`card-publication-${idx}`}>
              <div className="space-y-2">
                <h3 className="font-bold text-sm xs:text-base" data-testid={`text-pub-title-${idx}`}>
                  {pub.link ? (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {pub.title}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-xs text-muted-foreground" data-testid={`text-pub-publisher-${idx}`}>
                  {pub.publisher}
                </p>
                <p className="text-xs text-muted-foreground" data-testid={`text-pub-date-${idx}`}>
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
