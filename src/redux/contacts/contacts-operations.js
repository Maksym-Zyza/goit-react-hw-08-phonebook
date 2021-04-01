import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:3000";

// Оновлення
export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error));
  }
};

// Додавання
export const addContact = ({ name, number }) => (dispatch) => {
  const contacts = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

// Видалення
export const deleteContact = (id) => (dispatch) => {
  console.log("deleteContact>>", id);
  dispatch(actions.delContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.delContactSuccess(id)))
    .catch((error) => dispatch(actions.delContactError(error)));
};

// ===============
// export const fetchContacts = () => (dispatch) => {
//   dispatch(actions.fetchContactRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
//     .catch((error) => dispatch(actions.fetchContactError(error)));
// };
