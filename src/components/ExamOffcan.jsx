import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ExamOffcan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>2MG SOLUTIONS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            a
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ExamOffcan;