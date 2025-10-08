import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface ContactProps {
  email: string;
  phone?: string;
}

export default function Contact({ email, phone }: ContactProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-contact-heading">
            Get in touch
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`mailto:${email}`}
              className="text-lg md:text-xl hover:text-primary transition-colors flex items-center gap-2"
              data-testid="link-contact-email"
            >
              <Mail className="w-5 h-5" />
              {email}
            </a>
            {phone && (
              <a 
                href={`tel:${phone}`}
                className="text-lg md:text-xl hover:text-primary transition-colors flex items-center gap-2"
                data-testid="link-contact-phone"
              >
                <Phone className="w-5 h-5" />
                {phone}
              </a>
            )}
          </div>

          <div>
            <Button 
              size="lg"
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
