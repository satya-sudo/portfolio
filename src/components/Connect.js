import React, { useRef } from 'react';
import { Box, Typography, TextField, Button, Grid, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Instagram, Phone, Code } from '@mui/icons-material';
import emailjs from 'emailjs-com';

const Connect = () => {
  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <Box
      id="connect"
      sx={{
        padding: '50px 20px',
        backgroundColor: '#121212',
        color: '#e0e0e0',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="h2" color="#64ffda" gutterBottom>
        Connect with Me
      </Typography>

      {/* Social Links */}
      <Grid container spacing={2} justifyContent="center" sx={{ margin: '20px 0' }}>
        <Grid item>
          <IconButton
            component={Link}
            href="https://github.com/satya-sudo"
            target="_blank"
            sx={{ color: '#64ffda' }}
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/satyam-shree-524208193/"
            target="_blank"
            sx={{ color: '#64ffda' }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://leetcode.com/u/satya-sudo/"
            target="_blank"
            sx={{ color: '#64ffda' }}
          >
            <Code fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://instagram.com/satyam_shree_s22"
            target="_blank"
            sx={{ color: '#64ffda' }}
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        <IconButton sx={{ color: '#64ffda' }}>
          <Email />
        </IconButton>
        satyamshree22@gmail.com
        <br />
        <IconButton sx={{ color: '#64ffda' }}>
          <Phone />
        </IconButton>
        +91 8002715425
      </Typography>

      {/* Contact Form */}
      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSendEmail}
        sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}
      >
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          variant="outlined"
          sx={{ marginBottom: '15px', backgroundColor: '#1e1e1e', borderRadius: '5px' }}
          InputLabelProps={{ style: { color: '#e0e0e0' } }}
          InputProps={{ style: { color: '#e0e0e0' } }}
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          type="email"
          variant="outlined"
          sx={{ marginBottom: '15px', backgroundColor: '#1e1e1e', borderRadius: '5px' }}
          InputLabelProps={{ style: { color: '#e0e0e0' } }}
          InputProps={{ style: { color: '#e0e0e0' } }}
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          sx={{ marginBottom: '15px', backgroundColor: '#1e1e1e', borderRadius: '5px' }}
          InputLabelProps={{ style: { color: '#e0e0e0' } }}
          InputProps={{ style: { color: '#e0e0e0' } }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#64ffda',
            color: '#121212',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#52e0c7' },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Connect;
