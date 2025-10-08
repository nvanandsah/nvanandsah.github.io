import TechStack from '../TechStack';

export default function TechStackExample() {
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

  return <TechStack technologies={technologies} />;
}
