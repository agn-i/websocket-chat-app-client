import onlineIcon from "../icons/onlineIcon.png";

const TextContainer = ({ users }) => {
  console.log("users===>", users);
  return (
    <div className="flex flex-col ml-24 text-white h-[60%] justify-between">
      <div>
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Created with React, Tailwind, Express, Node and Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h3>People currently chatting:</h3>
          <div className="flex items-center mb-1/2">
            <h3>
              {users.map(({ name }) => (
                <div key={name} className="flex items-center mb-1">
                  {name}
                  <img
                    className="pl-[10px]"
                    alt="Online Icon"
                    src={onlineIcon}
                  ></img>
                </div>
              ))}
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
