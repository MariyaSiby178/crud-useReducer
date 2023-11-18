import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "./Reducer";
import ACTION from "./Action";

function ReducerList() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [editItem, setEditItem] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const addItem = () => {
    dispatch({
      type: ACTION.ADD_ITEM,
      payload: {
        id: Date.now(),
        name: name,
        age: age,
        phoneNumber: phoneNumber,
        gender: gender,
      },
    });
    setName("");
    setAge("");
    setPhoneNumber("");
    setGender("");
  };
  const editItemHandler = (item) => {
    setEditItem(item);
    setName(item.name);
    setAge(item.age);
    setPhoneNumber(item.phoneNumber);
    setGender(item.gender);
  };

  const updateItem = () => {
    dispatch({
      type: ACTION.UPDATE_ITEM,
      payload: {
        id: editItem.id,
        name: name,
        age: age,
        phoneNumber: phoneNumber,
        gender: gender,
      },
    });
    setEditItem(null);
    setName("");
    setAge("");
    setPhoneNumber("");
    setGender("");
  };

  const deleteItem = (itemId) => {
    dispatch({ type: ACTION.DELETE_ITEM, payload: itemId });
  };
  return (
    <div>
      <h1 className="text-center fw-bold mt-5 mb-4 text-danger">
        CRUD OPERATION
      </h1>
      <div className="container w-50 p-5 justify-content-center mb-5 shadow border border-secondary border-2">
        <label className=" mt-1">Name:</label>
        <input
          type="text"
          className="form-control mb-4 ms-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <label className="">Age:</label>
        <input
          type="number"
          className="form-control mb-4 ms-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <label className="">PhoneNumber:</label>
        <input
          type="number"
          className="form-control mb-4 ms-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <label className="">Gender:</label><br/>
        <select value={gender}
          onChange={(e) => setGender(e.target.value)}>
            <option value="" selected disabled>Select the Gender</option>
          <option value= "Female">Female</option>
          <option value= "Male">Male</option>
        </select><br/>
        {/* <input
          type="text"
          className="form-control mb-4 ms-2"
          
          placeholder="Gender"
        /> */}
<div className="d-flex justify-content-center mt-3">
        {editItem ? (
          <button className="ms-3 btn btn-dark" onClick={updateItem}>
            Update
          </button>
        ) : (
          <button className="ms-3 btn btn-info" onClick={addItem}>
            Add Item
          </button>
        )}
        </div>
      </div>
      <div className=" container mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.gender}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => editItemHandler(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <ul>
        {state.items.map((item) => (
          <li key={item.id} className="d-flex justify-content-center">
            {item.text}
            <button className="ms-2 btn btn-primary" onClick={() => editItemHandler(item)}>Edit</button>
            <button className="ms-2 btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ReducerList;
