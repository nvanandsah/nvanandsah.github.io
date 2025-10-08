import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Patent {
  title: string;
  organization: string;
  date: string;
}

interface PatentsProps {
  patents: Patent[];
}

export default function Patents({ patents }: PatentsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-patents-heading">
          Patents
        </h2>
        <div className="space-y-4">
          {patents.map((patent, idx) => (
            <Card key={idx} className="p-6 md:p-8 border-l-4 border-l-primary" data-testid={`card-patent-${idx}`}>
              <div className="space-y-3">
                <div className="flex flex-wrap items-start gap-3">
                  <h3 className="font-bold text-lg flex-1" data-testid={`text-patent-title-${idx}`}>
                    {patent.title}
                  </h3>
                  <Badge variant="outline" data-testid={`badge-patent-org-${idx}`}>
                    {patent.organization}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`text-patent-date-${idx}`}>
                  {patent.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
