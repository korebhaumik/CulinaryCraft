import { StreamingTextResponse, LangChainStream } from "ai";
import { OpenAIChat } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { Message } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();
  const instructions= messages.at(-1)?.role === "user" ? messages.at(-1)?.content : "";
  console.log("instructions", instructions);
  const { stream, handlers } = LangChainStream();

  const llm = new OpenAIChat({
    streaming: true,
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
  });
  const oneInputPrompt = new PromptTemplate({
    inputVariables: ["instructions"],
    template:
      `Give me a recipe and how to prepare it for the following requirements: {instructions}"
      `
  });
  const formattedPrompt = await oneInputPrompt.format({
    instructions,
  });

  llm.call(formattedPrompt, {}, [handlers]).catch(console.error);
  return new StreamingTextResponse(stream);
}