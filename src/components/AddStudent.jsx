import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddStudent = ({
  handleClose,
  show,
  student,
  handleChange,
  handleSubmit,
  editSubmit,
  edit,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="pb-3">
              <label htmlFor="firstName">Firtname</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={student.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={student.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="pb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                value={student.phone}
                onChange={handleChange}
              />
            </div>
            <div className="pb-3">
              <label htmlFor="group">Group</label>
              <input
                type="tel"
                name="group"
                id="group"
                className="form-control"
                value={student.group}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={edit === true ? handleSubmit : editSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudent;
