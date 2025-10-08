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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-certifications-heading">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="p-4 hover-elevate" data-testid={`card-certification-${idx}`}>
              <div className="space-y-2">
                <h3 className="font-semibold text-sm xs:text-base" data-testid={`text-cert-name-${idx}`}>
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground" data-testid={`text-cert-issuer-${idx}`}>
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-xs text-muted-foreground" data-testid={`text-cert-date-${idx}`}>
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
