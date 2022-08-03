import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddService.css";

const AddService = () => {
    // uses of useRef
    const imageRef = useRef();
    const nameRef = useRef();
    const descriptionRef = useRef();
    // handle added
    const handleAdded = (e) => {
        e.preventDefault();
        const image = imageRef.current.value;
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        // console.log(image,name,description);
        const newService = { image, name, description };

        // Send data to the server
        fetch("http://localhost:5000/services", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Service Successfully");
                    e.target.reset();
                }
            })

    }

    return (
        <div className='py-5'>
            <h2 className='mb-5'>Please Add an Service</h2>

            <div className='w-50 mx-auto'>
                <Form onSubmit={handleAdded}>
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text" ref={imageRef} placeholder="Enter Image Url" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" ref={descriptionRef} placeholder="Description" required />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default AddService;