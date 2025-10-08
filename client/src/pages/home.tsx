import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Patents from "@/components/Patents";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import profileImage from '@assets/generated_images/Professional_headshot_for_portfolio_81bc0d41.png';

export default function Home() {
  const experiences = [
    {
      company: "Arka Energy Pvt Ltd",
      positions: [
        { title: "Head of Product", period: "Jan 2024 - Present" },
        { title: "Lead Product Manager", period: "Dec 2022 – Dec 2023" }
      ],
      achievements: [
        "Oversaw end-to-end product strategy and GTM execution for a solar design SaaS tool across India, US, EU, and ROW.",
        "Scaled flagship product from inception to $1M ARR, achieving market leadership in India.",
        "Managed a team of 6 (PMs and UI Designers), coordinating with Engineering, Sales, and Marketing.",
        "Launched the product successfully in the US, adapting features for local compliance and user expectations.",
        "Defined product KPIs, metrics tracking, and roadmap aligned to global expansion goals."
      ]
    },
    {
      company: "The Solar Labs",
      positions: [
        { title: "Senior Product Manager", period: "Jan 2022 – Nov 2022" },
        { title: "Head of Engineering", period: "2021 – Dec 2021" },
        { title: "Senior Software Engineer", period: "Jan 2021 – Jun 2021" },
        { title: "Software Engineer", period: "Jun 2020 – Dec 2020" }
      ],
      achievements: [
        "Transitioned from engineering to product leadership within 18 months, leading the full lifecycle of a solar SaaS design platform.",
        "Developed and executed product roadmap, incorporating data-driven insights and user feedback loops.",
        "Implemented architecture refactor (microservices, GPU computing) to increase system performance 3×.",
        "Mentored engineering and PM teams on agile processes, metrics, and product prioritization.",
        "Led international market research to prepare the product for global expansion."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech — Electronics & Communication Engineering",
      institution: "Indraprastha Institute of Information Technology (IIIT), Delhi",
      period: "2016 – 2020"
    }
  ];

  const certifications = [
    {
      name: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "Aug 2020",
      link: "https://www.coursera.org/"
    },
    {
      name: "SQL for Data Science",
      issuer: "Coursera",
      date: "Aug 2020",
      link: "https://www.coursera.org/"
    },
    {
      name: "Sensors & Actuators",
      issuer: "NPTEL"
    },
    {
      name: "Internet of Things",
      issuer: "NPTEL"
    }
  ];

  const patents = [
    {
      title: "System and Method for Irradiance Estimation on Solar Panels",
      organization: "WIPO",
      date: "Jun 2023"
    },
    {
      title: "System and Method for Pitched Roof Design Automation",
      organization: "WIPO",
      date: "Jun 2023"
    }
  ];

  const skillCategories = [
    {
      category: "Product Strategy & Leadership",
      skills: [
        "Product Strategy & Roadmap",
        "Go-to-Market (GTM)",
        "SaaS Scaling",
        "User Acquisition",
        "Cross-Functional Leadership",
        "Team Building & Mentorship",
        "Agile / Scrum / Lean Product"
      ]
    },
    {
      category: "Technical Tools",
      skills: [
        "Python",
        "Django",
        "Flask",
        "SQL",
        "TensorFlow",
        "Keras",
        "AWS",
        "REST APIs"
      ]
    },
    {
      category: "Domain Expertise",
      skills: [
        "Data / AI / Machine Learning",
        "Energy / Clean-Tech",
        "Metrics-Driven Product Management",
        "ARR / MRR / CAC / LTV",
        "Churn Analysis",
        "User Engagement"
      ]
    }
  ];

  const technologies = [
    { name: "Python", icon: "python" },
    { name: "Django", icon: "django" },
    { name: "Flask", icon: "flask" },
    { name: "SQL", icon: "sql" },
    { name: "TensorFlow", icon: "tensorflow" },
    { name: "Keras", icon: "keras" },
    { name: "AWS", icon: "aws" },
    { name: "REST APIs", icon: "api" }
  ];

  const projects = [
    {
      title: "Neural Network Visualizer Web App",
      description: "Flask / Keras / Streamlit application that visualizes neural network prediction flows, making complex ML models more interpretable."
    },
    {
      title: "Human & Weapon Detection System (YOLOv3)",
      description: "Real-time computer vision system for occupancy and threat alerts using advanced object detection algorithms."
    }
  ];

  const publications = [
    {
      title: "Experimental Results for Energy Harvesting Using TEG",
      publisher: "IEEE ICC Workshop 2020",
      date: "2020"
    }
  ];

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    // In a real app, this would trigger a CV download
    alert("CV download would start here");
  };

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Hero
        name="Navneet Anand Sah"
        title="Chief Product Officer | Head of Product | SaaS & Clean Energy Specialist"
        status="Open to work"
        location="Remote | CA, US | Blr, India"
        email="navneetanandsah@gmail.com"
        linkedin="https://www.linkedin.com/in/navneetanandsah/"
        profileImage={profileImage}
        onDownloadCV={handleDownloadCV}
      />

      <About
        summary="Executive product leader with a proven track record scaling SaaS products from concept to $1M+ ARR across India, US, and global markets. Experienced in leading cross-functional teams, defining product strategy, and executing GTM plans for energy and SaaS platforms. Background in software engineering and R&D with multiple patents in clean-tech. Adept at bridging technology, business, and user experience to deliver measurable results and market leadership."
      />

      <Experience experiences={experiences} />

      <Education education={education} />

      <Certifications certifications={certifications} />

      <Patents patents={patents} />

      <Skills skillCategories={skillCategories} />

      <TechStack technologies={technologies} />

      <Projects projects={projects} />

      <Publications publications={publications} />

      <Contact email="navneetanandsah@gmail.com" />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p>© {new Date().getFullYear()} Navneet Anand Sah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
