import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const UpdateTitle = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>Update Title</Modal.Title>
        </Modal.Header>
        <InputGroup>
          <FormControl value={props.title} onChange={props.onTitleChange} />
        </InputGroup>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onUpdateTitle}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UpdateTitle;
//onClick={handleClose}
