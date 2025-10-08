import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface ContactProps {
  email: string;
  phone?: string;
}

export default function Contact({ email, phone }: ContactProps) {
  return (
    <section className="py-10 xs:py-12">
      <div className="px-4 xs:px-6 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-2xl xs:text-3xl font-bold" data-testid="text-contact-heading">
            Get in touch
          </h2>
          
          <div className="flex flex-col gap-3 justify-center items-center">
            <a 
              href={`mailto:${email}`}
              className="text-sm xs:text-base hover:text-primary transition-colors flex items-center gap-2"
              data-testid="link-contact-email"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="text-sm xs:text-base hover:text-primary transition-colors flex items-center gap-2"
                data-testid="link-contact-phone"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            )}
          </div>

          <div>
            <Button 
              size="sm"
              onClick={() => window.location.href = `mailto:${email}`}
              data-testid="button-contact-cta"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
