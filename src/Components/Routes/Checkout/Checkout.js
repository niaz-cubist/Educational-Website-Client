import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Checkout = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        document.title = 'Premium';
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container my-20 d-flex gap-5 w-75 '>
            <div className="card w-65 bg-base-400 shadow-xl">
                <figure><img src="https://images.squarespace-cdn.com/content/v1/5c2864609f8770b74f18cbb8/1565118033789-1JYNE10IZU8U0ELLF2WL/Basic+Package.png?format=1000w" alt="Basic" /></figure>
                <div className="card-body">
                    <h2 className="mx-auto card-title">Basic</h2>
                    <ListGroup>
                        <ListGroup.Item>1 Year Access</ListGroup.Item>
                        <ListGroup.Item>Group Wise Support</ListGroup.Item>
                        <ListGroup.Item>Solve problems within 1 hour(Working Day)</ListGroup.Item>

                    </ListGroup>
                    <div className="card-actions mt-2 mx-auto">
                        <button onClick={handleShow} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-65 bg-base-400 shadow-xl">
                <figure><img src="https://images.squarespace-cdn.com/content/v1/5b3ef9319772ae7eff0b2767/1538244005033-UKSNPZND2857GGDJDVCT/standard.png?format=1500w" alt="Standard" /></figure>
                <div className="card-body">
                    <h2 className="mx-auto card-title">Standard</h2>
                    <ListGroup>
                        <ListGroup.Item>1 Year Access</ListGroup.Item>
                        <ListGroup.Item>Online Platform Support</ListGroup.Item>
                        <ListGroup.Item>Solve Problems within 1 hour(Working Days)</ListGroup.Item>

                    </ListGroup>
                    <div className="card-actions justify-end">
                        <button onClick={handleShow} className="btn btn-primary mt-2 mx-auto">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-65 bg-base-400 shadow-xl">
                <figure><img src="https://us.123rf.com/450wm/dinozzz/dinozzz1303/dinozzz130300013/18411192-premium-golden-label-vector-illustration.jpg?ver=6" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="mx-auto card-title">Premium</h2>
                    <ListGroup>
                        <ListGroup.Item>Life Time Access</ListGroup.Item>
                        <ListGroup.Item>24/7hr Support</ListGroup.Item>
                        <ListGroup.Item>One to One support with Professional Developer</ListGroup.Item>

                    </ListGroup>
                    <div className="card-actions justify-end">
                        <button onClick={handleShow} className="btn btn-primary mt-2 mx-auto">Buy Now</button>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Package</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Thanks for Buying</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Checkout;