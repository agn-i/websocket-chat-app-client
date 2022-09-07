import io from "socket.io-client";

const ENDPOINT = "https://websocket-chat-app-1.herokuapp.com";

export const socket = io(ENDPOINT);
