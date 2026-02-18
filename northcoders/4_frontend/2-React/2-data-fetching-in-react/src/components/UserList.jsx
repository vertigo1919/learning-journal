import { getUserById } from "../api";
import { useEffect, useState } from "react";
import "../App.css";

function UserList() {
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(1);
  const [error, setError] = useState(null);

  //test
  useEffect(() => console.log("This only runs once"), []);

  // this runs everytime userID changes
  useEffect(() => {
    fetchUser(userID);
  }, [userID]);

  async function fetchUser(userID) {
    setUser(null);
    setError(null);
    try {
      const data = await getUserById(userID);
      setUser(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load user");
    }
  }

  if (error) {
    return (
      <div className="user-card error">
        <p>⚠️ {error}</p>
        <button onClick={() => setUserID(1)}>Reset to User 1</button>
      </div>
    );
  }

  // prevents from accessing undefined properties
  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <section className="user-directory-widget">
      <article className="user-card">
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
      </article>

      <nav className="user-directory-nav">
        {userID > 1 ? (
          <button
            className="user-directory-button"
            onClick={() => {
              setUserID(userID - 1);
            }}
          >
            Previous User
          </button>
        ) : (
          ""
        )}

        <button
          className="user-directory-button"
          onClick={() => {
            setUserID(userID + 1);
          }}
        >
          Next User
        </button>
      </nav>
    </section>
  );
}

export default UserList;
