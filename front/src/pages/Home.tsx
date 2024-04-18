import { useEffect, useState } from 'react';
import { fetchEntries, ApiResponse } from '../services/api';
import Entry from '../components/TrainingLog/Entry';
import { Box, Button, Link, ThemeProvider, Typography } from '@mui/material';
import theme from '../themes/theme';
import '../themes/fonts.scss';
import Entries from '../components/TrainingLog/Entries';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography
          p={5}
          variant={'h1'}
          sx={{
            fontFamily: 'Chakra Petch, Arial, sans-serif',
            fontSize: 40,
            color: '#063970',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Sit Pretty
        </Typography>
        <Button
          href="/add"
          variant="contained"
          sx={{
            fontFamily: 'Chakra Petch, Arial, sans-serif',
            fontSize: 18,
            color: '#063970',
            backgroundColor: '#76aaea',
            width: 150,
          }}
        >
          Skapa
        </Button>
        <Entries />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
