import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Input from "@/components/ui/Input";
import Result from "@/components/ui/Result";
import { AiContextProvider } from "@/context/Ai.context";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <AiContextProvider>
        <Input />
        <Result />
      </AiContextProvider>
    </main>
  );
}
