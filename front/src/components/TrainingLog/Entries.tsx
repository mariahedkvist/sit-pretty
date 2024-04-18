import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { ApiResponse, fetchEntries } from '../../services/api';
import Entry from './Entry';

const Entries = () => {
  const [entries, setEntries] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ApiResponse[] = await fetchEntries();
        console.log(data);
        setEntries(sortByDate(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sortByDate = (entries: ApiResponse[]) => {
    return entries.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        maxWidth: 700,
      }}
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
  );
};

export default Entries;
