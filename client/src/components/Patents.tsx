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
    <section className="py-8 xs:py-10">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl xs:text-3xl font-bold mb-4 xs:mb-6" data-testid="text-patents-heading">
          Patents
        </h2>
        <div className="space-y-3">
          {patents.map((patent, idx) => (
            <Card key={idx} className="p-4 xs:p-6 border-l-4 border-l-primary" data-testid={`card-patent-${idx}`}>
              <div className="space-y-2">
                <div className="flex flex-wrap items-start gap-2">
                  <h3 className="font-bold text-sm xs:text-base flex-1" data-testid={`text-patent-title-${idx}`}>
                    {patent.title}
                  </h3>
                  <Badge variant="outline" className="text-xs" data-testid={`badge-patent-org-${idx}`}>
                    {patent.organization}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground" data-testid={`text-patent-date-${idx}`}>
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
