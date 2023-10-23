import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../features/students/studentSlice";
import axios from "axios";

const StudentLost = ({ editData, input }) => {
  const studentData = useSelector((state) => state.student);
  //   console.log(students);

  //   console.log(students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);
  const { loading, students, error } = studentData;

  const filteredData = students.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return (
        el.firstName.toLowerCase().includes(input) ||
        el.lastName.toLowerCase().includes(input)
      );
    }
  });

  const deleteData = (id) => {
    axios
      .delete(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/" + id
      )
      .then(() => dispatch(fetchStudents()))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <table className="table table-bordered border-primary w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Group</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0
            ? filteredData.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.phone}</td>
                    <td>{el.group}</td>

                    <td className="d-flex gap-4">
                      <button
                        className="btn btn-info"
                        onClick={() => editData(el.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteData(el.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default StudentLost;
