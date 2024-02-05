import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1e1e1e] flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute before:z-[1] after:z-2 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-dark-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-teal-900 after:dark:opacity-40 before:lg:h-[360px] z-4">
        <Image
          src="/flowy-long-logo.svg"
          alt="Flowy Logo"
          height={20}
          width={100}
          priority
        />
      </div>

      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-white dark:text-gray-100">
          schematics
        </h1>
        <Image
          src="/schematic.png"
          alt="schematic"
          height={500}
          width={750}
          priority
        />
      </div>

        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Are you an investor?&nbsp;
          <a href="/manifesto" className="font-bold">
            Check out our manifesto here.
          </a>
        </p>
    </main>
  );
}
