import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const UpdateTitle = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Title
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <InputGroup>
          <FormControl value={props.Title} onChange={props.onTitleChange} />
        </InputGroup>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UpdateTitle;
