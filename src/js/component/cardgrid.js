import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const cardData = [
  {
    imgSrc: "https://picsum.photos/id/237/200/300",
    title: "Card 1",
    text: "Primera Carta con contenido"
  },
  {
    imgSrc: "https://picsum.photos/id/238/200/300",
    title: "Card 2",
    text: "Segunda Carta con contenido"
  },
  {
    imgSrc: "https://picsum.photos/id/239/200/300",
    title: "Card 3",
    text: "Tercera Carta con contenido"
  },
  {
    imgSrc: "https://picsum.photos/id/240/200/300",
    title: "Card 4",
    text: "Cuarta Carta con contenido"
  }
];

function CardGrid() {
  return (
    <Row xs={2} md={4} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imgSrc} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Find Out More!</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;
