import Card from 'react-bootstrap/Card';

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  image
}) {
  return (
    <Card className="h-100" style={{ width: '100%' }}>

      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{
          height: '230px',
          objectFit: 'cover',
          objectPosition: 'center 20%'
        }}
      />

      <Card.Body className="text-center">

        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <strong>Team:</strong> {team}
          <br />

          <strong>Nationality:</strong> {nationality}
          <br />

          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />

          <strong>Age:</strong> {age}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://placehold.co/600x400?text=Player'
};

export default Player;