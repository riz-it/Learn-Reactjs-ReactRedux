import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListContact,
  deleteContact,
  detailContact,
} from "../../actions/actionContact.js";

const ContactList = () => {
  const {
    getListContactResult,
    getListContactLoading,
    getListContactErrorMessage,
    deleteContactResult,
  } = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListContact());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResult) {
      dispatch(getListContact());
    }
  }, [deleteContactResult, dispatch]);

  return (
    <div>
      <h2>Contact List</h2>
      <hr />
      {getListContactResult ? (
        getListContactResult.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.name} - {item.phone} -{" "}
                <button
                  onClick={() => {
                    dispatch(deleteContact(item.id));
                  }}
                >
                  Delete
                </button>{" "}
                -{" "}
                <button
                  onClick={() => {
                    dispatch(detailContact(item));
                  }}
                >
                  Edit
                </button>
              </p>
            </div>
          );
        })
      ) : getListContactLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {getListContactErrorMessage
            ? getListContactErrorMessage
            : "Data not found"}
        </p>
      )}
    </div>
  );
};

export default ContactList;
