import { getUserById } from "../api";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState({});

  // TASK 01 > run some code when the component mounts
  useEffect(() => console.log("This only runs once"), []);

  // TASK 02 and 03 > Fetch user and store in a state
  async function fetchUser(userID) {
    const user = await getUserById(userID);

    setUsers(user);
  }

  useEffect(() => {
    fetchUser(1);
  }, []);

  console.log(">>", users);
  return <section></section>;
}

export default UserList;
