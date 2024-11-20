import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const darkTheme = {
  background: "#121212",
  text: "#e0e0e0",
  accent: "#64ffda",
  secondary: "#1e1e1e",
};

const theme = createTheme({
  palette: {
    background: {
      default: darkTheme.background,
    },
    text: {
      primary: darkTheme.text,
    },
    primary: {
      main: darkTheme.accent,
    },
    // secondary: {
    //     secondary: darkTheme.secondary,
    // }
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const experiences = [
  {
    company: "CAST",
    logo: `${process.env.PUBLIC_URL}/assets/cast_logo.jpeg`,
    title: "Software Developer",
    type: "Full-time | Hybrid",
    duration: "Jun 2023 - Present · 1 yr 6 mos",
    location: "Bangalore",
    details: [
      "Designed and optimized Cypher queries to power complex backend operations.",
      "Developed robust APIs using Go, ensuring efficient data handling and integration.",
      "Enhanced user experience by working on a React-based front end, creating intuitive data visualizations for clearer insights.",
      "Built and maintained automation pipelines using Jenkins, batch scripting, shell, and Python, streamlining workflows for better productivity.",
      "Developed and deployed containers and installers to facilitate seamless product delivery.",
      "Created a high-performance microservice in Flask and Python to manage and process massive data streams from diverse sources, including Neo4j and PostgreSQL.",
      "Innovated with graph algorithms to distill complex data streams into simplified formats, optimized for large language models (LLMs) and downstream processing.",
    ],
  },
  {
    company: "CAST",
    logo: `${process.env.PUBLIC_URL}/assets/cast_logo.jpeg`,
    title: "Software Engineer Intern",
    type: "Internship",
    duration: "Jun 2022 - Jun 2023 · 1 yr 1 mo",
    location: "Bangalore",
    details: [
      "Frontend Development: Built and optimized user interfaces using React and Redux. Leveraged the Ogma graph library to create interactive, data-rich visualizations for improved user engagement.",
      "Backend Expertise: Developed and maintained a resilient backend with Go and Neo4j, ensuring efficient data storage, retrieval, and processing.",
      "Installer and Automation: Created and maintained Windows installers using Batch scripting and Pascal with Inno Setup. Developed Docker-based installers and wrote Python scripts for installation, deployment, and containerization workflows.",
    ],
  },
  {
    company: "we45",
    logo: `${process.env.PUBLIC_URL}/assets/we45inc_logo.jpeg`,
    title: "Full Stack Developer Intern",
    type: "Internship",
    duration: "Feb 2022 - Jun 2022 · 5 mos",
    location: "Bengaluru, Karnataka, India",
    details: [
      "Serverless and Cloud Infrastructure: Worked extensively with the Serverless Framework to build scalable, event-driven applications deployed on DigitalOcean.",
      "API Development: Designed and implemented APIs to support various functionalities, ensuring efficient data flow and integration with cloud services.",
      "Command Line Tools: Developed robust command-line tools for managing DigitalOcean droplets, automating tasks such as provisioning, scaling, and monitoring.",
      "Pentesting Labs: Created pentesting labs for security research, simulating real-world environments to test and improve penetration testing strategies.",
      "Scripting and Automation: Leveraged Python, JavaScript, and Bash to automate deployment, configuration, and management tasks across cloud infrastructure and security environments.",
    ],
  },
  {
    company: "Logist Technologies",
    logo: `${process.env.PUBLIC_URL}/assets/logist_technology_logo.jpeg`,
    title: "Full Stack Developer Intern",
    type: "Internship",
    duration: "Aug 2021 - Feb 2022 · 7 mos",
    location: "Bangalore Urban, Karnataka, India",
    details: [
      "Backend Development with Django: Led the development and feature enhancement of the Logist backend server using Django, focusing on robust and scalable architecture.",
      "Database Design: Designed and optimized the database, implementing multiple user types (clients and supply partners) and diverse authentication mechanisms (phone and email).",
      "Live Tracking and Notifications: Integrated live tracking functionality using Firebase RDB for real-time location updates. Developed push notification systems through FCM and managed background tasks with RabbitMQ and Celery.",
      "Authentication and Payment Systems: Implemented phone OTP, email verification, and seamless payment integration for secure and user-friendly transactions.",
      "Real-Time Communication: Developed a real-time messaging and chat system using Django Channels to enable instant communication between users.",
      "Team Leadership: Managed and coordinated a team of four developers, ensuring effective collaboration and timely delivery of features.",
    ],
  },
  {
    company: "REACH Technologies",
    logo: `${process.env.PUBLIC_URL}/assets/reachtechnologies_logo.jpeg`,
    title: "Django Developer",
    type: "Internship",
    duration: "Apr 2021 - Sep 2021 · 6 mos",
    location: "Bangalore Urban, Karnataka, India",
    details: [
      "Backend Development: Contributed to the development and maintenance of the backend server for holagraph.com, ensuring high performance and scalability.",
      "REST API Development: Followed REST API conventions to design clean, efficient, and secure endpoints for seamless communication between the backend and frontend.",
      "Frontend Integration: Collaborated closely with the frontend team to integrate backend services with frontend interfaces, ensuring smooth data flow and a cohesive user experience.",
    ],
  }
];

const ExperienceTimeline = () => {
    return (
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: "100vh",
            padding: "20px",
          }}
          id="experience"
        >
          <Typography variant="h4" align="center" gutterBottom>
            Experience
          </Typography>
          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 20px",
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: darkTheme.secondary,
                    color: darkTheme.text,
                    padding: "20px",
                    flex: 1,
                  }}
                >
                  <Typography variant="h6" color={theme.palette.primary.main}>
                    {exp.company}
                  </Typography>
                  <Typography variant="subtitle1">{exp.title}</Typography>
                  <Typography variant="body2" color={theme.palette.primary.main}>
                    {exp.type} | {exp.duration}
                  </Typography>
                  <Typography variant="body2" >
                    {exp.location}
                  </Typography>
                  <ul>
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>
                        <Typography variant="body2">{detail}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default ExperienceTimeline;