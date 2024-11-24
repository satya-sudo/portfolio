import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";

const projects = [
  {
    title: "Visual Sort",
    description:
      "A sorting algorithm visualizer tool that shows the steps of sorting algorithms in graphical form.",
    image: `${process.env.PUBLIC_URL}/assets/visvual.png`,
    github: "https://github.com/satya-sudo/visual-sort",
    demo: "https://visual-sort-satya-sudo.vercel.app/",
  },
  {
    title: "PassVault",
    description:
      "A secure password storage system with encryption, available as both web and CLI interfaces.",
    image: `${process.env.PUBLIC_URL}/assets/pass.png`,
    github: "https://github.com/satya-sudo/PASSVAULT_WEB",
    demo: "https://yourdemo.com/passvault",
  },
  {
    title: "Storty",
    description:
      "A URL shortener with an advanced dashboard for URL statistics, built using Django and React.",
    image: `${process.env.PUBLIC_URL}/assets/shorty.png`,
    github: "https://github.com/satya-sudo/Shorty_BE",
    demo: "https://shorty-fe.vercel.app/",
  },
  {
    title: "Angels with paws",
    description:
      "Web page for ngo for rescue dogs (Free lance)",
    image: `${process.env.PUBLIC_URL}/assets/awp.png`,
    github: "https://github.com/satya-sudo/angleswithpaws",
    demo: "https://angleswithpaws.vercel.app/",
  },
  {
    title: "Lan Blob store and video streamer",
    description:
      "Lan based, Blob store and video streamer.",
    image: `${process.env.PUBLIC_URL}/assets/placeholder.png`,
    github: "https://github.com/satya-sudo/lan_blob_store",
    demo: "https://yourdemo.com/storty",
  },
];

const ProjectSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" color="#64ffda" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#1e1e1e",
                color: "#e0e0e0",
              }}
            >
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h6" color="#64ffda" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  component="a"
                  href={project.github}
                  target="_blank"
                  sx={{ color: "#64ffda" }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component="a"
                  href={project.demo}
                  target="_blank"
                  sx={{ color: "#64ffda" }}
                >
                  <Launch />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectSection;
