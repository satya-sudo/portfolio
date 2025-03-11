import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Download } from "@mui/icons-material";


const downloadFile = () => {
    const DownloadElement = document.createElement("a");
    const fileName = "SATYAMSHREE20251.pdf"; // Replace with your file name
  
    DownloadElement.href = `${process.env.PUBLIC_URL}/assets/${fileName}`;
    DownloadElement.target = "_blank"; // Open in a new tab if required
    DownloadElement.download = fileName; // Name for the downloaded file
    DownloadElement.click();
  
    setTimeout(() => {
      DownloadElement.remove();
    }, 0);
  };

const ResumeDownloadButton = () => {
  return (
    <Box textAlign="center" sx={{ margin: "20px 0" }}>
      <Tooltip title="Download Resume" arrow>
        <IconButton
          onClick={downloadFile}
          sx={{
            backgroundColor: "#64ffda",
            color: "#121212",
            "&:hover": {
              backgroundColor: "#52e0c7",
            },
            width: "30px",
            height: "30px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Download fontSize="small" />
        </IconButton>
        <span> Download Resume </span>
      </Tooltip>
    </Box>
  );
};

export default ResumeDownloadButton;
