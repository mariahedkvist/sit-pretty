interface Props {
  date: string;
  location: string;
}

const Entry: React.FC<Props> = ({ date, location }) => {
  return (
    <div>
      <h1>{date}</h1>
      <p>{location}</p>
    </div>
  );
};

export default Entry;
