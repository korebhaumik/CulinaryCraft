"use client";
import React, { useState } from "react";
import Note from "./Note";
import { useAi } from "@/context/Ai.context";
import cn from "@/lib/utils";

type Props = {};

export default function Input({}: Props) {
  const [temp, setTemp] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const { append, isLoading } = useAi();
  const handleSumbitInstructions = async () => {
    if (instructions == "") return;
    setTemp("");
    await append({
      content: instructions,
      role: "user",
    });
  };

  return (
    <main>
      {/* Recipe */}
      <section className="my-5 max-w-4xl px-5 mx-auto">
        <p className="flex items-center">
          {/* <span className="w-7 h-7 text-center pt-0.5 text-black bg-white rounded-full">
            1
          </span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>

          <span className=" text-base  tracking-tight mx-1">
            Enter what you want to cook . . .
          </span>
          <span className="text-zinc-500 text-base  tracking-tight"></span>
        </p>
        <textarea
          value={temp}
          onChange={(e) => {
            setTemp(e.target.value);
            setInstructions(e.target.value);
          }}
          className="w-full p-3 mt-3 h-[6.25rem] outline-none focus:outline-zinc-500 focus:-outline-offset-2  bg-inherit rounded-lg resize-none border-2 border-zinc-700"
          placeholder="e.g. I want to cook a chicken curry. I have some common herbs and masalas in my kitchen make me something with that."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.shiftKey) return;
              e.preventDefault();
              handleSumbitInstructions();
            }
          }}
        />
        <button
          onClick={handleSumbitInstructions}
          disabled={isLoading}
          className={cn("w-full mt-2 bg-white text-black py-4 rounded-lg", {
            "bg-white/50": isLoading,
          })}
        >
          {!isLoading ? "Generate Recipe" : "Generating..."}
        </button>
      </section>
    </main>
  );
}
