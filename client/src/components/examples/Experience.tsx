import Experience from '../Experience';

export default function ExperienceExample() {
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

  return <Experience experiences={experiences} />;
}
