
// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// const MyOrder = (props) => {
//   const { _id, name, description, img } = props.order;
  
//   // delete an user
//   const handleDeleteUser = id => {
//     const url = `http://localhost:5000/orders/${id}`
//     fetch(url, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.deletedCount > 0) {
//           alert("Deleted Successfully");
//           const remainingUsers = _id !== id;
//           setUsers(remainingUsers);
//         }
//       })

//   }
//   return (
//     <Col>
//       <Card className='mb-3'>
//         <Card.Img variant="top" src={img} />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>
//             {description}
//           </Card.Text>
//           <Button

//             onClick={() => handleDeleteUser(_id)}

//             variant="danger">Cancel</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default MyOrder;