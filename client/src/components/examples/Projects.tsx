import Projects from '../Projects';

export default function ProjectsExample() {
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

  return <Projects projects={projects} />;
}
