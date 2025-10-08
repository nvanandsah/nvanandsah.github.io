import Hero from '../Hero';
import profileImage from '@assets/Generated Image October 08, 2025 - 9_55PM_1759942363162.png';

export default function HeroExample() {
  return (
    <Hero
      name="Navneet Anand Sah"
      title="Chief Product Officer | Head of Product | SaaS & Clean Energy Specialist"
      status="Open to work"
      location="Remote | CA, US | Blr, India"
      email="navneetanandsah@gmail.com"
      linkedin="https://www.linkedin.com/in/navneetanandsah/"
      profileImage={profileImage}
      onDownloadCV={() => console.log('Download CV clicked')}
    />
  );
}
