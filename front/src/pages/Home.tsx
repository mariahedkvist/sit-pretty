import { useEffect, useState } from 'react';
import { fetchEntries, ApiResponse } from '../services/api';
import Entry from '../components/TrainingLog/Entry';

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
    <div>
      <h1>Doris träningsdagbok</h1>
      <ul>
        {entries.map((entry) => (
          <Entry date={entry.date} location={entry.location} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
