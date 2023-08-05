"use client";
import React, { useEffect, useRef } from "react";
import { useAi } from "@/context/Ai.context";

type Props = {};

export default function Result({}: Props) {
  const { messages } = useAi();
  //   console.log(messages);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div
        className=" min-h-[1px] max-w-4xl px-5 mx-auto flex flex-col-reverse"
        id="content"
      >
        {messages.map((message, index) => {
          if (message.role === "user") return;
          if (index !== messages.length - 1) return;
          return (
            <div className="" key={Math.random()}>
              <p className="text-gray-300 whitespace-pre-wrap">
                {message.content}
              </p>
            </div>
          );
        })}
      </div>
      <div ref={bottomRef} className="mb-5" />
    </>
  );
}
