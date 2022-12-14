import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardGrid() {
  return (
    <Row xs={2} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;

// function CardGrid() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={imgUrl} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           {description}
//         </Card.Text>
//         <Button variant="primary" href={buttonUrl}>{buttonLabel}</Button>
//       </Card.Body>
//     </Card>
//   );
// }
// <
// 	title="Bob Dylan", 
// 	imageUrl="dgg", 
// 	description="dsg", 
// 	buttonUrl="ffdg", 
// 	buttonLabel="Find out More!" 
// 	/>

// export default CardGrid;
  
  