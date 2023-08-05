"use client";
import { ChatRequestOptions } from "ai";
import { type Message, useChat, CreateMessage } from "ai/react";
import { useContext, createContext } from "react";

type IContext = {
  messages: Message[];
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => Promise<string | null | undefined>;
  isLoading: boolean;
  setMessages: (messages: Message[]) => void;
  setConfig: (config: "tweet" | "handle" | "hashtag") => void;
};

const AiContext = createContext<IContext>({
  messages: [],
  append: () => Promise.resolve(null),
  isLoading: false,
  setMessages: () => {},
  setConfig: () => {},
});

export const AiContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { append, messages, isLoading, setMessages } = useChat({
    api: "/api/ai",
  });
  return (
    <AiContext.Provider
      value={{
        messages,
        append,
        isLoading,
        setMessages,
        setConfig: () => {},
      }}
    >
      {children}
    </AiContext.Provider>
  );
};
export const useAi = () => useContext(AiContext);
