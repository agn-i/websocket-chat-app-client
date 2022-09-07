import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  console.log("new message ==>", text, user);
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="flex justify-end px-[5%] my-4">
      <p className="flex items-center text-[#828282] pr-[10px] font-light">
        {trimmedName}
      </p>
      <div className="bg-primary rounded-2xl px-5 py-1 text-white inline-block max-w-[80%]">
        <p className="w-full tracking-normal text-xl text-white">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex justify-start px-[5%] my-4">
      <div className="rounded-2xl px-5 py-1 text-white inline-block max-w-[80%] bg-secondary">
        <p className="w-full tracking-normal text-xl text-dark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="flex items-center text-[#828282] pl-[10px] ">{user}</p>
    </div>
  );
};

export default Message;
