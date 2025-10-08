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
    <section className="py-8 xs:py-6 w-full">
      <div className="px-4 xs:px-6">
        <div className="flex flex-col gap-6 items-center text-center">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt={name}
              className="w-24 h-24 xs:w-28 xs:h-28 rounded-full object-cover ring-2 ring-primary/20"
              data-testid="img-profile"
            />
          </div>
          
          <div className="space-y-4 w-full">
            <div>
              <h1 className="text-2xl xs:text-3xl font-bold mb-2" data-testid="text-name">
                {name}
              </h1>
              <p className="text-sm xs:text-base font-medium text-muted-foreground mb-3" data-testid="text-title">
                {title}
              </p>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs text-muted-foreground" data-testid="text-status">{status}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 justify-center" data-testid="text-location">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{location}</span>
              </div>
              <div className="flex items-center gap-2 justify-center" data-testid="text-email">
                <Mail className="w-3 h-3" />
                <a href={`mailto:${email}`} className="hover:text-foreground transition-colors text-xs truncate max-w-full">
                  {email}
                </a>
              </div>
              {phone && (
                <div className="flex items-center gap-2 justify-center" data-testid="text-phone">
                  <Phone className="w-3 h-3" />
                  <a href={`tel:${phone}`} className="hover:text-foreground transition-colors text-xs">
                    {phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-2 justify-center" data-testid="link-linkedin">
                <Linkedin className="w-3 h-3" />
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors text-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <Button 
                onClick={onDownloadCV}
                className="w-full"
                size="sm"
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
