import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import "./index.css";
import React, { useState } from "react";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      console.log({ name: userName, age: userAge });
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddHandler} />
      <UserList users={usersList} />
    </div>
  );
}
