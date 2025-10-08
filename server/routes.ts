import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV Download endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real application, this would serve an actual PDF file
    // For now, we'll create a simple text-based CV
    const cvContent = `NAVNEET ANAND SAH
Chief Product Officer | Head of Product | SaaS & Clean Energy Specialist

📍 Remote | CA, US | Blr, India
📧 navneetanandsah@gmail.com
🔗 https://www.linkedin.com/in/navneetanandsah/

PROFESSIONAL SUMMARY
Executive product leader with a proven track record scaling SaaS products from concept to $1M+ ARR across India, US, and global markets. Experienced in leading cross-functional teams, defining product strategy, and executing GTM plans for energy and SaaS platforms. Background in software engineering and R&D with multiple patents in clean-tech. Adept at bridging technology, business, and user experience to deliver measurable results and market leadership.

CORE COMPETENCIES
• Product Strategy & Roadmap
• Go-to-Market (GTM)
• SaaS Scaling
• User Acquisition
• Cross-Functional Leadership
• Team Building & Mentorship
• Agile / Scrum / Lean Product
• Data / AI / Machine Learning
• Energy / Clean-Tech Domain Expertise
• Python, Django, Flask, SQL, TensorFlow, Keras, AWS, REST APIs

PROFESSIONAL EXPERIENCE

Arka Energy Pvt Ltd
Head of Product (Jan 2024 - Present)
Lead Product Manager (Dec 2022 – Dec 2023)
• Oversaw end-to-end product strategy and GTM execution for a solar design SaaS tool across India, US, EU, and ROW
• Scaled flagship product from inception to $1M ARR, achieving market leadership in India
• Managed a team of 6 (PMs and UI Designers), coordinating with Engineering, Sales, and Marketing
• Launched the product successfully in the US, adapting features for local compliance and user expectations
• Defined product KPIs, metrics tracking, and roadmap aligned to global expansion goals

The Solar Labs
Head of Engineering & Product (Jan 2022 – Nov 2022)
Senior Software Engineer (July 2021 – Dec 2021)
Software Engineer (Dec 2020 – Jun 2021)
• Transitioned from engineering to product leadership within 18 months
• Developed and executed product roadmap, incorporating data-driven insights and user feedback loops
• Implemented architecture refactor (microservices, GPU computing) to increase system performance 3×
• Mentored engineering and PM teams on agile processes, metrics, and product prioritization
• Led international market research to prepare the product for global expansion

PATENTS
• System and Method for Irradiance Estimation on Solar Panels — WIPO, Jun 2023
• System and Method for Pitched Roof Design Automation — WIPO, Jun 2023

EDUCATION
B.Tech — Electronics & Communication Engineering
Indraprastha Institute of Information Technology (IIIT), Delhi | 2016 – 2020

CERTIFICATIONS
• Neural Networks and Deep Learning (Coursera) – Aug 2020
• SQL for Data Science (Coursera) – Aug 2020
• Sensors & Actuators (NPTEL)
• Internet of Things (NPTEL)

SELECTED PROJECTS
• Neural Network Visualizer Web App — Flask / Keras / Streamlit
• Human & Weapon Detection System (YOLOv3) — Real-time computer vision

PUBLICATIONS
• "Experimental Results for Energy Harvesting Using TEG" — IEEE ICC Workshop 2020
`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Navneet_Anand_Sah_CV.txt"');
    res.send(cvContent);
  });

  const httpServer = createServer(app);

  return httpServer;
}
