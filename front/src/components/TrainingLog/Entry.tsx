import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {
  date: string;
  location: string;
}

const Entry = ({ date, location }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fotnSize: 14 }}>{date}</Typography>
        <Typography sx={{ fontSize: 12 }}>{location}</Typography>
      </CardContent>
    </Card>
  );
};

export default Entry;
