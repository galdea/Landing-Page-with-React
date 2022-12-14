import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardGrid() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
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
  
  