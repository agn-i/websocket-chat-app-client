import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="flex justify-center text-center min-h-screen items-center bg-[#1A1A1D] ">
      <div className="w-[70%] md:w-[50%] lg:w-[30%]">
        <h1 className="text-white text-5xl">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="border border-r-0 py-4 px-5 w-full"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="border border-r-0 py-4 px-5 w-full mt-5"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            name &&
              room &&
              navigate({
                pathname: "/chat",
                search: `?name=${name}&room=${room}`,
              });
          }}
          className="mt-5 text-white uppercase border-0 bg-primary hover:bg-green-700 p-5 rounded-2xl inline-block w-full focus:outline-none"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
