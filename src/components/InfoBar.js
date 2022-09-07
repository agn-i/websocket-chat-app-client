import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="flex items-center justify-between bg-primary h-[60px] w-full">
      <div className="flex text-white ml-[2%]">
        <img className="self-center" src={onlineIcon} alt="online icon" />
        <p className="text-md ml-1 capitalize font-bold tracking-widest">
          {room}
        </p>
      </div>
      <div className="flex justify-end mr-[5%]">
        <a href="/">
          <img className="h-4" src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
