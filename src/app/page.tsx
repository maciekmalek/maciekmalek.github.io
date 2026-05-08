import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center sm:text-left">
          Hello, I'm <a href="https://www.linkedin.com/in/maciek-malek/">Maciek Małek</a>
        </h1>
        <h2 className="text-6xl font-bold text-center sm:text-left">
          Welcome to My personal website :P
        </h2>
      </main>
    </div>
  );
}
