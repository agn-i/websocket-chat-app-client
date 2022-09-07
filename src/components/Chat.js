import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { socket } from "../service/socket";

import TextContainer from "./TextContainer";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setRoom(() => searchParams.get("room"));
    setName(() => searchParams.get("name"));

    socket.emit("join", {
      name: searchParams.get("name"),
      room: searchParams.get("room"),
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1A1A1D] p-10">
      <div className="flex flex-col justify-between bg-white border-r-1 h-[60vh] w-full lg:w-[75%] ">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <div className="hidden xl:block">
        <TextContainer users={users} />
      </div>
    </div>
  );
};

export default Chat;
