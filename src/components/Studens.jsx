import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import StudentLost from "./StudentLost";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/students/studentSlice";
import axios from "axios";

const Studens = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    group: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    e.preventDefault();
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  //Add
  const studentData = useSelector((state) => state.student);
  //   console.log(students);
  const { loading, students, error } = studentData;
  console.log(students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    axios
      .post(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students",
        student
      )
      .then(() => dispatch(fetchStudents()))
      .catch((error) => {
        console.log(error);
      });
  };

  const showBtn = () => {
    setEdit(true);
    handleShow();
    setStudent({
      firstName: "",
      lastName: "",
      phone: "",
      group: "",
    });
  };

  //Edit
  const editData = (id) => {
    handleShow();
    setEdit(false);
    const aa = students.filter((el) => {
      if (el.id === id) {
        return setStudent({
          id: el.id,
          firstName: el.firstName,
          lastName: el.lastName,
          phone: el.phone,
          group: el.group,
        });
      }
    });
  };

  const editSubmit = (e) => {
    e.preventDefault();
    handleClose();
    axios
      .put(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/" +
          student.id,
        student
      )
      .then(() => dispatch(fetchStudents()))
      .catch((error) => {
        console.log(error);
      });
  };

  //search
  const [input, setInput] = useState("");
  const searchChange = (e) => {
    e.preventDefault();
    const inputText = e.target.value;
    setInput(inputText.toLowerCase());
  };

  return (
    <div>
      <header className="d-flex gap-4 w-100 pt-3 pb-3 ">
        <form
          className="d-flex w-75 gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-100">
            <input
              type="text"
              name="search"
              className="form-control w-100 "
              id="search"
              placeholder="Search..."
              onChange={searchChange}
            />
          </div>
          {/* <div>
            <input
              type="text"
              name="search"
              className="form-control w-100 "
              id="search"
              placeholder="Search by group..."
              onChange={searchChange}
            />
          </div> */}
        </form>
        <button className="btn btn-success" onClick={showBtn}>
          Add Student
        </button>
      </header>
      <AddStudent
        handleClose={handleClose}
        show={show}
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        edit={edit}
        editSubmit={editSubmit}
      />
      <StudentLost editData={editData} input={input} />
    </div>
  );
};

export default Studens;
