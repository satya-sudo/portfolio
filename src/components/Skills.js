import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Code,
  Build,
  Lightbulb,
  Storage,
  Terminal,
  Settings,
} from "@mui/icons-material";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", icon: <Terminal /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "Go", icon: <Terminal /> },
    { name: "React", icon: <Code /> },
    { name: "Django", icon: <Code /> },
    { name: "Flask", icon: <Terminal /> },
    { name: "Serverless", icon: <Storage /> },
    { name: "Docker", icon: <Build /> },
    { name: "AWS", icon: <Storage /> },
    { name: "Neo4j", icon: <Storage /> },
  ];

  const toolsAndFrameworks = [
    { name: "Jenkins", icon: <Settings /> },
    { name: "Git", icon: <Build /> },
    { name: "Langchain", icon: <Code /> },
    { name: "Vite", icon: <Settings /> },
    { name: "DigitalOcean", icon: <Storage /> },
  ];

  const softSkills = [
    { name: "Problem-Solving", icon: <Lightbulb /> },
    { name: "Collaboration", icon: <Lightbulb /> },
    { name: "Adaptability", icon: <Lightbulb /> },
    { name: "Critical Thinking", icon: <Lightbulb /> },
  ];

  return (
    <Box
      id="skills"
      sx={{
        padding: "50px 20px",
        backgroundColor: "#1e1e1e",
        color: "#e0e0e0",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2" color="#64ffda" gutterBottom>
        Skills
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Technical Skills */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#333",
              color: "#e0e0e0",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="#64ffda" gutterBottom>
                Technical Skills
              </Typography>
              <Stack spacing={2}>
                {technicalSkills.map((skill, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#64ffda",
                        color: "#121212",
                      }}
                    >
                      {skill.icon}
                    </Avatar>
                    <Typography>{skill.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Tools and Frameworks */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#333",
              color: "#e0e0e0",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="#64ffda" gutterBottom>
                Tools & Frameworks
              </Typography>
              <Stack spacing={2}>
                {toolsAndFrameworks.map((tool, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#64ffda",
                        color: "#121212",
                      }}
                    >
                      {tool.icon}
                    </Avatar>
                    <Typography>{tool.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Soft Skills */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#333",
              color: "#e0e0e0",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" color="#64ffda" gutterBottom>
                Soft Skills
              </Typography>
              <Stack spacing={2}>
                {softSkills.map((skill, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#64ffda",
                        color: "#121212",
                      }}
                    >
                      {skill.icon}
                    </Avatar>
                    <Typography>{skill.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
