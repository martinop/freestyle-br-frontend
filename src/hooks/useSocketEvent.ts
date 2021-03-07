import { useContext, useEffect, useRef } from "react";
import { SocketIOContext } from 'contexts/socket'

const useSocketEvent = (
  eventKey: string,
  callback: (...args: any) => void
) => {
	
  const socket = useContext(SocketIOContext);
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const socketHandlerRef = useRef(function() {
    if (callbackRef.current) {
      callbackRef.current.apply(this, arguments);
    }
  });

  const subscribe = () => {
    if (socket) {
      socket.on(eventKey, socketHandlerRef.current);
    }
  };

  const unsubscribe = () => {
    if (socket) {
      socket.removeListener(eventKey, socketHandlerRef.current);
    }
  };

  useEffect(() => {
    subscribe();
    return unsubscribe;
  }, [eventKey]);

  return { socket, unsubscribe, subscribe };
};

export default useSocketEvent;
