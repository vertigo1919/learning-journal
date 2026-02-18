import { getUserById } from "../api";
import { useEffect, useState } from "react";

function UserList() {
  const [user, setUser] = useState(null);
  // TASK 01 > run some code when the component mounts
  useEffect(() => console.log("This only runs once"), []);

  // TASK 02 and 03 > Fetch user and store in a state

  useEffect(() => {
    fetchUser(1);
  }, []);

  async function fetchUser(userID) {
    const data = await getUserById(userID);
    setUser(data);
  }

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <section className="user-card">
      <header className="user-card-header">
        <h4>{user.name}</h4>
      </header>

      <div className="user-card-body">
        <dl className="user-info">
          <dt className="user-info-label">username: </dt>
          <dd className="user-info-value">{user.username}</dd>
          <dt className="user-info-label">email: </dt>
          <dd className="user-info-value">{user.email}</dd>
          <dt className="user-info-label">address: </dt>
          <dd className="user-info-value">
            {user.address.suite}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </dd>
          <dt className="user-info-label">company: </dt>
          <dd className="user-info-value">{user.company.name}</dd>
        </dl>
      </div>
    </section>
  );
}

export default UserList;
