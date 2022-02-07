import {
  GET_LIST_CONTACT,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  DETAIL_CONTACT,
} from "../../actions/actionContact.js";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactErrorMessage: false,

  addNewContactResult: false,
  addNewContactLoading: false,
  addNewContactErrorMessage: false,

  deleteContactResult: false,
  deleteContactLoading: false,
  deleteContactErrorMessage: false,

  detailContactResult: false,

  editContactResult: false,
  editContactLoading: false,
  editContactErrorMessage: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactErrorMessage: action.payload.errorMessage,
      };
    case ADD_NEW_CONTACT:
      return {
        ...state,
        addNewContactResult: action.payload.data,
        addNewContactLoading: action.payload.loading,
        addNewContactErrorMessage: action.payload.errorMessage,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactResult: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactErrorMessage: action.payload.errorMessage,
      };

    case EDIT_CONTACT:
      return {
        ...state,
        editContactResult: action.payload.data,
        editContactLoading: action.payload.loading,
        editContactErrorMessage: action.payload.errorMessage,
      };

    case DETAIL_CONTACT:
      return {
        ...state,
        detailContactResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default contactReducer;
