import * as React from "react";
import io from 'socket.io-client';

export const SocketIOContext = React.createContext<SocketIOClient.Socket | undefined>(undefined);

export interface ISocketIOProviderProps {
  url: string;
  opts?: SocketIOClient.ConnectOpts;
}

export const SocketIOProvider: React.FC<ISocketIOProviderProps> = ({
  url,
  opts,
  children,
}) => {
  const socketRef = React.useRef<SocketIOClient.Socket>();

  if (!socketRef.current && typeof window !== "undefined") {
    socketRef.current = io(url, opts || {});
  }
  return (
    <SocketIOContext.Provider value={socketRef.current}>
      {children}
    </SocketIOContext.Provider>
  );
};