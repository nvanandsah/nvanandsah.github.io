import Skills from '../Skills';

export default function SkillsExample() {
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

  return <Skills skillCategories={skillCategories} />;
}
