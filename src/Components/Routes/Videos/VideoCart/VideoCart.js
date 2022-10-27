import React, { useState } from 'react';
import Pdf from "react-to-pdf";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ref = React.createRef();

const VideoCart = ({ param }) => {
    const { videos, name, details } = param

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div ref={ref} className="card card-compact p-2 w-10/12 bg-base-100 shadow-xl">

            <figure><img src={videos} alt="react" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleShow} className="w-35 mx-auto  btn btn-primary">Details</button>
                </div>
            </div>

            <Pdf targetRef={ref} filename="Details.pdf">
                {({ toPdf }) => <Button className='w-50 mx-auto mb-2' variant="outline-primary" onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {details}
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

export default VideoCart;