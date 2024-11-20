import React from "react";
import { Box, Typography, Grid, Avatar, Stack } from "@mui/material";
import { Favorite, Hiking, Book, Brush, DirectionsBike, MusicNote } from "@mui/icons-material";

const AboutMe = () => {
  return (
    <Box
      id="aboutme"
      sx={{
        padding: "50px 20px",
        backgroundColor: "#121212",
        color: "#e0e0e0",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" component="h2" color="#64ffda" gutterBottom>
        About Me
      </Typography>

      {/* Main Introduction */}
      <Box sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
        <Typography variant="body1" gutterBottom>
          I am <b>Satyam Shree</b>, a passionate software developer with expertise in building scalable and
          efficient solutions. With hands-on experience in <b>Go, Python, React</b>, and <b>Shell Scripting</b>, 
          I have successfully designed and implemented APIs, developed high-volume data UIs, and enhanced 
          system performance by optimizing backend controllers. 
        </Typography>
        <Typography variant="body1" gutterBottom>
          Currently at <b>Cast Software</b>, I lead initiatives in microservices architecture, automation, 
          and SaaS scalability, delivering a 60-70% improvement in API response times and increasing test 
          coverage by 47%. I thrive on solving complex challenges, like building AI-powered tools with Flask 
          and Langchain or creating automation pipelines using Docker and Jenkins.
        </Typography>
      </Box>

      {/* Hobbies Section */}
      <Box sx={{ maxWidth: "800px", margin: "40px auto" }}>
        <Typography variant="h5" component="h3" color="#64ffda" gutterBottom>
          More About Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          When I'm not coding, I immerse myself in activities that fuel my creativity and keep me energized. 
          Here are a few things that make me *me*:
        </Typography>
        <br />
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Stack alignItems="center">
              <Avatar sx={{ bgcolor: "#64ffda", mb: 1 }}>
                <Book />
              </Avatar>
              <Typography variant="body2">
                <b>Reading</b> <br />
                Thriller & Fantasy
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center">
              <Avatar sx={{ bgcolor: "#64ffda", mb: 1 }}>
                <DirectionsBike />
              </Avatar>
              <Typography variant="body2">
                <b>Traveling</b> <br />
                Bike Trips & Trekking
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center">
              <Avatar sx={{ bgcolor: "#64ffda", mb: 1 }}>
                <Brush />
              </Avatar>
              <Typography variant="body2">
                <b>Painting</b> <br />
                Sceneries
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center">
              <Avatar sx={{ bgcolor: "#64ffda", mb: 1 }}>
                <MusicNote />
              </Avatar>
              <Typography variant="body2">
                <b>Guitar</b> <br />
                Creating Melodies
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack alignItems="center">
              <Avatar sx={{ bgcolor: "#64ffda", mb: 1 }}>
                <Hiking />
              </Avatar>
              <Typography variant="body2">
                <b>Adventures</b> <br />
                Exploring Trails
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* Final Personal Touch */}
      <Box sx={{ maxWidth: "800px", margin: "20px auto", lineHeight: 1.8 }}>
        <Typography variant="body1">
          Whether it's diving into a gripping thriller novel, exploring unknown trails on my bike, or losing 
          myself in the beauty of painting sceneries, I believe every moment adds color to my life. My hobbies 
          not only recharge me but also inspire me to approach my work with a fresh perspective and boundless energy!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
