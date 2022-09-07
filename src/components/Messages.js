import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="py-[5%] overflow-auto flex-auto">
    {messages.map((msg, i) => (
      <div key={i}>
        <Message name={name} message={msg} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
