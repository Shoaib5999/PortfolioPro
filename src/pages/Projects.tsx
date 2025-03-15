import { Card, CardMedia, CardContent, Chip, Button, Typography } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import React from "react";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "Redux", "Firebase"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing skills, projects, and professional experience.",
      image: "https://via.placeholder.com/600x400",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://example.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">
            My Projects
          </Typography>
          <div className="h-1 sm:w-60 bg-blue-500 mx-auto mb-9"></div>
          <Typography variant="body1" className="mt-6 text-gray-600 dark:text-gray-400 max-w-dvw mx-auto">
            Here are some of the projects I've worked on. Each project reflects my skills and experience in frontend development.
          </Typography>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <div className="h-60 overflow-hidden">
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  />
                </div>
                <CardContent className="flex-grow">
                  <Typography variant="h5" className="font-bold mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} sx={{ backgroundColor: "#e3f2fd", color: "#1976d2", fontWeight: "medium" }} />
                    ))}
                  </div>
                </CardContent>
                <div className="p-4 flex justify-between">
                  <Button variant="outlined" startIcon={<GitHub />} href={project.github} target="_blank" rel="noopener noreferrer" sx={{ borderColor: "#1976d2", color: "#1976d2", "&:hover": { borderColor: "#1565c0", color: "#1565c0" } }}>
                    Code
                  </Button>
                  <Button variant="contained" startIcon={<Launch />} href={project.demo} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
                    Live Demo
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="contained" size="large" href="https://github.com/" target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
