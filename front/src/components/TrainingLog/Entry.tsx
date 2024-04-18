import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {
  date: string;
  location: string;
  description: string;
  rating?: number;
  reflection?: string;
}

const Entry = ({ date, location, description, rating, reflection }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: '#063970',
        // width: '100%',
        minHeight: 270,
      }}
    >
      <CardContent>
        <Typography sx={{ fontWeight: 'bold', color: '#cdd7e2' }} variant="h5">
          {date}
        </Typography>
        <Typography variant="h6" sx={{ color: '#cdd7e2' }}>
          Plats: {location} <br />
          Tränat: {description}
          <br />
          Betyg: {rating ? `${rating} / 5` : 'Inte betygsatt'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#cdd7e2' }}>
          Reflektion: {reflection}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Entry;
