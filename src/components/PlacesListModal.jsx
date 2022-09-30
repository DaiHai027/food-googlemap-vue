import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

const PlacesListModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Open modal
            </Button>

            {
                show && (
                    <div className='foodplace-modal'>
                        <h2>Mydal title</h2>
                        <p>Hello her is a modal test</p>
                        <Autocomplete className='g-maps-autocomplete'>
                            <input type={'text'} />
                        </Autocomplete>
                        <Button onClick={handleClose}>Close</Button>
                    </div>
                )
            }

            {/* <Modal show={show} onHide={handleClose} className='modal-places-list' >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default PlacesListModal