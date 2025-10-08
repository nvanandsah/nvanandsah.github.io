import Patents from '../Patents';

export default function PatentsExample() {
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

  return <Patents patents={patents} />;
}
