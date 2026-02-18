import { getUserById } from "../api";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState({});

  // TASK 01 > run some code when the component mounts
  useEffect(() => console.log("This is only runs once"), []);

  // TASK 02 and 03 > Fetch user and store in state

  async function fetchUser(userID) {
    //if (users.length > 5){return}else{
    const user = await getUserById(userID);

    setUsers(user);
    //}
  }

  useEffect(() => {
    fetchUser(1);
  }, []);

  console.log(">>", users);
  return <section></section>;
}

export default UserList;

// useEffect ((fetchUser(3) , []))
// useEffect(()=> fetchUser(3), [])

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state

// setUsers([...users , user])
//    console.log(">>", users)

// OLD
//// TASK 01
// const [testlog , setTestLog] = useState("")
// function testLog ()
// {console.log("test")}

// TASK 01 v2
//useEffect (()=> console.log("This is only runs once") , [])

///// TASK 02 /////
// async function fetchUser(userID) {
//   const user = await getUserById(userID)
//   console.log(user)
// }
// useEffect ((fetchUser(3) , []))
////////////
