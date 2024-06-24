export const projects = [
  {
    id: 1,
    name: "Project Name",
    tagline: "A quick tagline description of my project goes here",
    description: "A longer detailed description of the project.",
    images: {
      desktop: [
        "desktop_image1.jpg",
        "desktop_image2.jpg",
        "desktop_image3.jpg",
      ],
      mobile: ["mobile_image1.jpg", "mobile_image2.jpg", "mobile_image3.jpg"],
    },
    features: ["Feature 1", "Feature 2", "Feature 3"],
    technologies: ["Vue", "Tailwind CSS", "GSAP"],
    github: "https://github.com/yourusername/projectname",
    liveDemo: "https://yourlivedemo.com",
    codeSample: {
      images: ["code_image1.jpg", "code_image2.jpg"],
      explanation:
        "This code snippet shows how we initialize the main Vue instance and configure the router. The second image shows the setup of the state management using Vuex.",
    },
  },
];
