import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import ResumeDownloadChip from './ResumeDownloadChip';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e1e',
          color: '#e0e0e0',
        },
      }}
    >
      {/* Profile Image and Name */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/photo.jpeg`}
          alt="Profile"
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '3px solid #64ffda',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
            marginBottom: '10px',
          }}
        />
        <Typography variant="h6" component="div" color="#64ffda">
          Satyam Shree
        </Typography>
      </div>

      {/* Navigation Links */}
      <List>
        {['About Me', 'Experience', 'Projects', 'Skills', 'Connect'].map((text) => (
          <ListItem
            button
            key={text}
            sx={{
              color: '#e0e0e0',
              '&:hover': {
                color: '#64ffda',
              },
            }}
          >
            <Link
              to={text.toLowerCase().replace(' ', '')}
              smooth={true}
              duration={500}
              offset={-64} // Adjust offset if needed to align sections properly
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                display: 'block',
              }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <List>
      <ResumeDownloadChip />

      </List>
    </Drawer>
  );
};

export default Sidebar;
