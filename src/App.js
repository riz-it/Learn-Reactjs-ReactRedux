import React from "react";
import { AddContact, ContactList } from "./components";

const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Contact App use React Reducer</h2>
      <AddContact />
      <hr />
      <ContactList />
    </div>
  );
};

export default App;
