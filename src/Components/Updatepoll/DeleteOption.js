import React from "react";
import { Modal, Button } from "react-bootstrap";
const DeleteOption = (props) => {
  return (
    <Modal show={props.show} onHide={props.onCloseOption}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to Delete this Option ?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.option}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCloseOption}>
          No
        </Button>
        <Button variant="primary" onClick={props.onDeletePollOption}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteOption;
