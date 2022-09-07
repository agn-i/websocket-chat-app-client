const Input = (props) => {
  const { setMessage, message, sendMessage } = props;

  return (
    <form className="flex border-t-2 border-solid border-[#D3D3D3] ">
      <input
        placeholder="Type a message..."
        className="border-0 border-radius-0 p-[3%] w-[80%] text-lg focus:outline-none"
        type="text"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className="text-white uppercase decoration-0 bg-primary p-2 inline-block border-0 w-[20%]"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
