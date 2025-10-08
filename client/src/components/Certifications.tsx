import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-certifications-heading">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="p-6 hover-elevate" data-testid={`card-certification-${idx}`}>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg" data-testid={`text-cert-name-${idx}`}>
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-cert-issuer-${idx}`}>
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-sm text-muted-foreground" data-testid={`text-cert-date-${idx}`}>
                    {cert.date}
                  </p>
                )}
                {cert.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    data-testid={`button-cert-view-${idx}`}
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
