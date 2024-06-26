export const projectsData = [
  {
    id: "1",
    name: "Cafe Triangle",
    tagline: "Cafe Triangle was a small cafe located in Kanazawa, Japan",
    description: `Cafe Triangle was the first fully functioning hosted website I ever made.
    When I first started learning web dev I made it my one year goal to create our shops website. This is the final project.
    I especially love the vibrant but subdued user interface
    `,
    mainScreenshot: "@/assets/screenshots/cafe-screenshot-main.jpg",
    images: {
      desktop: [
        "@/assets/screenshots/cafe-desktop-shot-1.png",
        "@/assets/screenshots/cafe-desktop-shot-2.png",
        "@/assets/screenshots/cafe-desktop-shot-3.png",
      ],
      mobile: [
        "@/assets/screenshots/cafe-mobile-shot-1.png",
        "@/assets/screenshots/cafe-mobile-shot-2.png",
        "@/assets/screenshots/cafe-mobile-shot-3.png",
      ],
    },
    technologies: ["Angular", "Tailwind CSS", "Flowbite"],
    features: [
      "Multi-lingual functionality for EN/JP/ES",
      "Dark/Light Modes",
      "Responsive Design",
      "Optimized for Speed",
    ],
    github: "https://github.com/dev-jLagunas/cafe-refresh",
    liveDemo: "https://cafe-triangle.com/",
    codeSample: {
      images: ["code_image1.jpg", "code_image2.jpg"],
      explanation:
        "This code snippet shows how we initialize the main Vue instance and configure the router. The second image shows the setup of the state management using Vuex.",
    },
  },
  {
    id: "2",
    name: "Code Chicano",
    tagline:
      "A blog about my experience as a Mexican-American self-taught programmer",
    description: `Code Chicano is a fully functioning C.R.U.D application with Firebase as its backend. It is also made with a quill editor so
    I am able to login and write new blog posts any time I want. The blog is fully responsive with many great features and funtionality.
    `,
    mainScreenshot: "@/assets/screenshots/chicano-screenshot-main.jpg",
    images: {
      desktop: [
        "@/assets/screenshots/chicano-desktop-shot-1.png",
        "@/assets/screenshots/chicano-desktop-shot-2.png",
        "@/assets/screenshots/chicano-desktop-shot-3.png",
      ],
      mobile: [
        "@/assets/screenshots/chicano-mobile-shot-1.png",
        "@/assets/screenshots/chicano-mobile-shot-2.png",
        "@/assets/screenshots/chicano-mobile-shot-3.png",
      ],
    },
    technologies: ["Angular", "Angular Material", "SCSS", "Firebase"],
    features: [
      "Firebase Authentication",
      "Firebase Database",
      "Quill Editor",
      "A.I Generated Artwork",
      "Dark/Light Modes",
      "Responsive Design",
      "Custom U.I. Components",
    ],
    github: "https://github.com/dev-jLagunas/code-chicano",
    liveDemo: "https://code-chicano.netlify.app/",
    codeSample: {
      images: ["code_image1.jpg", "code_image2.jpg"],
      explanation:
        "This code snippet shows how we initialize the main Vue instance and configure the router. The second image shows the setup of the state management using Vuex.",
    },
  },
  {
    id: "3",
    name: "Cosmic Neighborhood",
    tagline:
      "Cosmic Neighborhood is an immersive and interactive space-themed website",
    description: `Cosmic Neighborhood is an expanded and enhanced version of a Frontend Mentor challenge.
    Users can explore the planets of our solar system in an interactive and informative
    way. One of the standout features of this project is the interactive 3D models of the planets, created using Three.js.
    Users can zoom in, view the planets from different angles, and engage with the models for a more dynamic experience.
    `,
    mainScreenshot: "@/assets/screenshots/cosmic-screenshot-main.jpg",
    images: {
      desktop: [
        "@/assets/screenshots/cosmic-desktop-shot-1.png",
        "@/assets/screenshots/cosmic-desktop-shot-2.png",
        "@/assets/screenshots/cosmic-desktop-shot-3.png",
      ],
      mobile: [
        "@/assets/screenshots/cosmic-mobile-shot-1.png",
        "@/assets/screenshots/cosmic-mobile-shot-2.png",
        "@/assets/screenshots/cosmic-mobile-shot-3.png",
      ],
    },
    technologies: ["Vue", "Tailwind CSS", "Three Js"],
    features: [
      "Three JS 3D Models of Planets",
      "Beautiful user interface",
      "css animations",
    ],
    github: "https://github.com/dev-jLagunas/cosmic-neighborhood",
    liveDemo: "https://dev-jlagunas.github.io/cosmic-neighborhood/#/",
    codeSample: {
      images: ["code_image1.jpg", "code_image2.jpg"],
      explanation:
        "This code snippet shows how we initialize the main Vue instance and configure the router. The second image shows the setup of the state management using Vuex.",
    },
  },
  {
    id: "4",
    name: "Horizontal Scroll Gallery",
    tagline:
      "A horizontal scroll gallery filled with scroll triggered animations",
    description: `This was more of a passion project. For some reason I alway found horizontal scroll websites to be lovely.
    So I decided to showcase my photography using GSAP scroll trigger and horizontal scroll which was much tricker than I expected.
    The project was very time consuming but worth it in the end.
    `,
    mainScreenshot: "@/assets/screenshots/gallery-screenshot-main.jpg",
    images: {
      desktop: [
        "@/assets/screenshots/gallery-desktop-shot-1.png",
        "@/assets/screenshots/gallery-desktop-shot-2.png",
        "@/assets/screenshots/gallery-desktop-shot-3.png",
      ],
      mobile: [
        "@/assets/screenshots/gallery-mobile-shot-1.png",
        "@/assets/screenshots/gallery-mobile-shot-2.png",
        "@/assets/screenshots/gallery-mobile-shot-3.png",
      ],
    },
    technologies: ["Vite", "Vanilla Javascript", "GSAP Scroll Trigger"],
    features: [
      "complex scroll trigger animations",
      "responsive design",
      "beautiful user interface",
    ],
    github: "https://github.com/dev-jLagunas/horizontal-gallery",
    liveDemo: "https://dev-jlagunas.github.io/horizontal-gallery/",
    codeSample: {
      images: ["code_image1.jpg", "code_image2.jpg"],
      explanation:
        "This code snippet shows how we initialize the main Vue instance and configure the router. The second image shows the setup of the state management using Vuex.",
    },
  },
];
