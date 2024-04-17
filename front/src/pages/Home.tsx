import { useEffect, useState } from 'react';
import { fetchEntries, ApiResponse } from '../services/api';
import Entry from '../components/TrainingLog/Entry';
import { Box, ThemeProvider, Typography } from '@mui/material';
import theme from '../themes/theme';
import '../themes/fonts.scss';

const Home = () => {
  const [entries, setEntries] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ApiResponse[] = await fetchEntries();
        console.log(data);
        setEntries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: '#eab676',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
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
          Doris träningsdagbok
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {entries.map((entry) => (
            <Box m={3}>
              <Entry
                date={entry.date.substring(0, 10)}
                location={entry.location}
                description={entry.description}
                rating={entry.rating}
                reflection={entry.reflection}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
