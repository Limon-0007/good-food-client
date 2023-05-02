import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    const primary = purple[500];
    return (
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
      <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
    );
};

export default Error;