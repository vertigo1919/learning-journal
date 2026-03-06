// We are creating a room based chat app
// it will have 3 screens rendered conditionally based on the phase
// 1 Joining: a user must inpuit their disaply name and then either click on create room or join one via code
// 2 Lobby:
// 3 Chatting:

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// we create a socket connection to the server
// for simplicty we create it here but best practice is either to
// A) Create it ann export it in a seprate socket.js file
// B) Creata a custom hook that returns it
const socket = io("http://localhost:3000");

export default function ChatTest() {
  // add a state to hold the "phase" of the app for conditional rendering: 1 "joining" 2 "lobby" 3"chatting"

  const [phase, setPhase] = useState("joining");

  // add state for display Name in joining screen gets used
  const [displayName, setDisplayName] = useState("");

  // add a state for the roomCode
  const [roomCode, setRoomCode] = useState("");

  // add a state to keep track of connected users
  const [users, setUsers] = useState([]);

  // we create a state for chat message typed by the user
  const [inputMessage, setInputMessage] = useState("");

  // and a state for the messages received by the socket backend
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Subscribes to the "connect" event of the socket
    // if successful it logs it
    socket.on("connect", () => {
      console.log("connected:", socket.id);
    });

    //Subscribes to the custom "receive-message" event we defined
    // in the backend which broacast whatever the backend receives
    // to the front end via this socket
    // when this happens this callback is then run which
    // adds the message to the message status
    // and ret
    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // here we define the funcion that runs on unmounting
    // of this component
    // we remove the sockets in order to avoid memory leaks
    return () => {
      socket.off("receive-message");
      socket.off("connect");
    };
  }, []);

  // Handling functions for forms
  const handleMessageSubmit = (e) => {
    //we stop the browser default behaviour on click
    e.preventDefault();

    // we prevent empty submission
    if (!inputMessage.trim()) return;

    // we send the message via socket to the server
    socket.emit("send-message", inputMessage);

    // we clear the form
    setInputMessage("");
  };

  const handleJoinRoomSubmit = (e) => {
    //we stop the browser default behaviour on click
    e.preventDefault();
  };

  const handleCreateRoomSubmit = (e) => {
    //we stop the browser default behaviour on click
    e.preventDefault();
  };

  return (
    <>
      {/* PHASE 1: JOINING */}
      {phase === "joining" && (
        <div>
          <h1> Phase: Joining </h1>

          {/* CREATE A ROOM FORM */}
          <form onSubmit={handleCreateRoomSubmit}>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
            />
            <button type="submit">Create New Room</button>
          </form>

          {/* JOIN A ROOM FORM */}
          <form onSubmit={handleJoinRoomSubmit}>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
            />
            <input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              placeholder="Room Coode"
            />

            <button type="submit">Join Room</button>
          </form>
        </div>
      )}
      {/* PHASE 2: LOBBY */}
      {phase === "lobby" && (
        <div>
          <h1> Phase: Lobby </h1>
          <p>Room code: {roomCode}</p>
          <h2>Users</h2>
          <ul>
            {users.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
      {/* PHASE 3: CHATTING */}
      {phase === "chatting" && (
        <div>
          <h1>Socket Room Chat Test</h1>
          <form onSubmit={handleMessageSubmit}>
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type message..."
            />
            <button type="submit">Send</button>
          </form>

          <ul>
            {/* we map over the array to print the messages 
        we use the array index (i) as the react key */}
            {messages.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
