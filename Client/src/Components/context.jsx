import axios from "axios";
import { createContext } from "react";

const messageContext = createContext();

const MessageProvider = ({ children }) => {
  const handleSendMessage = async (message) => {
    console.log(message);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_FRONTEND}/message`,
        message
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const contextValues = { handleSendMessage };

  return (
    <messageContext.Provider value={contextValues}>
      {children}
    </messageContext.Provider>
  );
};

export { messageContext, MessageProvider };
