import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const AddNewOption = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onCloseNewOption}>
        <Modal.Header closeButton>
          <Modal.Title>Update Title</Modal.Title>
        </Modal.Header>
        <InputGroup>
          <FormControl value={props.title} onChange={props.onOptionChange} />
        </InputGroup>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onUpdateOption}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddNewOption;
