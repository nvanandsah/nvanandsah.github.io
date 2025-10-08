import Education from '../Education';

export default function EducationExample() {
  const education = [
    {
      degree: "B.Tech — Electronics & Communication Engineering",
      institution: "Indraprastha Institute of Information Technology (IIIT), Delhi",
      period: "2016 – 2020"
    }
  ];

  return <Education education={education} />;
}
