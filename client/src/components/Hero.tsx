import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  name: string;
  title: string;
  status: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  profileImage: string;
  onDownloadCV?: () => void;
}

export default function Hero({
  name,
  title,
  status,
  location,
  email,
  phone,
  linkedin,
  profileImage,
  onDownloadCV
}: HeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-primary/20"
              data-testid="img-profile"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" data-testid="text-name">
                {name}
              </h1>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4" data-testid="text-title">
                {title}
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-muted-foreground" data-testid="text-status">{status}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground flex-wrap justify-center md:justify-start">
              <div className="flex items-center gap-2" data-testid="text-location">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2" data-testid="text-email">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`} className="hover:text-foreground transition-colors">
                  {email}
                </a>
              </div>
              {phone && (
                <div className="flex items-center gap-2" data-testid="text-phone">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${phone}`} className="hover:text-foreground transition-colors">
                    {phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <Button 
                onClick={onDownloadCV}
                className="w-full sm:w-auto"
                data-testid="button-download-cv"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
