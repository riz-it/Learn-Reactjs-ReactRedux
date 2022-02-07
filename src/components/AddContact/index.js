import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewContact,
  editContact,
  getListContact,
} from "../../actions/actionContact";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const { addNewContactResult, detailContactResult, editContactResult } =
    useSelector((state) => state.contactReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editContact({ id, name, phone }));
    } else {
      dispatch(addNewContact({ name, phone }));
    }
  };

  useEffect(() => {
    if (addNewContactResult) {
      dispatch(getListContact());
      setName("");
      setPhone("");
    }
  }, [addNewContactResult, dispatch]);

  useEffect(() => {
    if (detailContactResult) {
      setId(detailContactResult.id);
      setName(detailContactResult.name);
      setPhone(detailContactResult.phone);
    }
  }, [detailContactResult, dispatch]);

  useEffect(() => {
    if (editContactResult) {
      dispatch(getListContact());
      setId("");
    }
  }, [editContactResult, dispatch]);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          style={{ margin: "10px", padding: "10px" }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          style={{ margin: "10px", padding: "10px" }}
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit" style={{ padding: "10px", margin: "10px" }}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddContact;
