import Card from 'react-bootstrap/Card';
import React from 'react';
import PlayerList from './PlayerList';

const Player = ({ name, team, nationality, jersyNumber, age, imageURL }) => {
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={imageURL} style={{ height: "18rem", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Team: {team}</Card.Title>
        <Card.Text>nationality: {nationality}</Card.Text>
        <Card.Text>jersyNumber: {jersyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jersyNumber: "00",
  age: "00",
  imageURL: "data:image/png;base64,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"
}
export default Player;