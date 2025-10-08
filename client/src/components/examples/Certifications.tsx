import Certifications from '../Certifications';

export default function CertificationsExample() {
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

  return <Certifications certifications={certifications} />;
}
