import axios from "axios";
export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

export const getListContact = () => {
  return (dispatch) => {
    // loading data
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data
    axios
      .get("http://localhost:3000/contacts", {
        timeout: 120000,
      })
      .then((res) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addNewContact = (data) => {
  return (dispatch) => {
    // loading data
    dispatch({
      type: ADD_NEW_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data
    axios("http://localhost:3000/contacts", {
      method: "POST",
      data: data,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: ADD_NEW_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_NEW_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deleteContact = (dataID) => {
  return (dispatch) => {
    // loading data
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data
    axios("http://localhost:3000/contacts/" + dataID, {
      method: "DELETE",
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const detailContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

export const editContact = (data) => {
  return (dispatch) => {
    // loading data
    dispatch({
      type: EDIT_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data
    axios("http://localhost:3000/contacts/" + data.id, {
      method: "PUT",
      timeout: 120000,
      data: data,
    })
      .then((res) => {
        dispatch({
          type: EDIT_CONTACT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_CONTACT,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
