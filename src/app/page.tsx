import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#1e1e1e] flex min-h-screen flex-col lg:p-24 p-5">
      <div className="before:absolute before:h-[100px] before:w-full sm:before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute before:z-[1] after:z-2 after:h-[70px] after:w-full sm:after:w-[120px] after:translate-x-1/3 after:-translate-y-16 after:bg-gradient-conic after:from-purple-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-dark-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-teal-900 after:dark:opacity-40 before:lg:h-[360px] z-4 py-4">
        <Image
          src="/flowy-long-logo.svg"
          alt="Flowy Logo"
          height={20}
          width={100}
          priority
        />
      </div>

      <div className="lg:flex lg:flex-row space-x-8 pb-2">
        <div className="max-w-[800px] flex flex-col space-y-8 py-10 text-left items-left">
          <h1 className="text-5xl lg:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-white from-10% to-red-900 pb-2">
            Remote work is broken.
          </h1>


          <div className="max-w-[500px] text-left flex flex-col space-y-8">
            <p className="text-white">
              Endless threads & notifications. Conversations are everywhere, but no one is on the same page.
            </p>

            <Image
              src="/alternatives.png"
              alt="Alternatives"
              height={100}
              width={200}
              priority
            />

            <p className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-br from-white from-10% to-teal-200">
              Move lighter and faster with flowy -
              a minimalist, voice-first device for team commz. It's like your core team is right there.
            </p>
          </div>

          <div className="flex flex-row space-x-2">
            <input type="email" placeholder="email address" className="p-2 bg-gray-800 text-white rounded-md placeholder:text-sm" />
            <button className="bg-gradient-to-r from-black to-gray-900 p-2 rounded-md font-semibold">Join waitlist</button>
          </div>
        </div>
        <Image
          src="/device.png"
          alt="device"
          height={350}
          width={550}
          priority
        />
      </div>

      <hr className="w-full opacity-10" />

      <div className="lg:grid lg:grid-cols-3 lg:gap-3 flex flex-col gap-2 py-10">
        <div className="flex flex-col space-y-8 text-left bg-gray-950 p-10 rounded-lg shadow-lg items-center">
          <h1 className="text-2xl text-center text-white text-wrap">
            Mark your core team.
          </h1>
          <Image
            src="/howitworks1.png"
            alt="schematic"
            className="shadow-lg"
            height={200}
            width={300}
            priority
          />
        </div>
        <div className="flex flex-col space-y-8 text-left bg-gray-950 p-10 rounded-lg shadow-lg items-center">
          <h1 className="text-2xl text-center text-white text-wrap">
            Get to your closest teammates.
          </h1>
          <Image
            className="shadow-lg"
            src="/howitworks2.png"
            alt="schematic"
            height={200}
            width={300}
            priority
          />
        </div>
        <div className="flex flex-col space-y-8 text-left bg-gray-950 p-10 rounded-lg shadow-lg items-center">
          <h1 className="text-2xl text-center text-white text-wrap">
            Receive recorded voice clips.
          </h1>
          <Image
            className="shadow-lg"
            src="/howitworks3.png"
            alt="schematic"
            height={200}
            width={300}
            priority
          />
        </div>
      </div>

      <hr className="w-full opacity-10" />

      <div className="flex flex-col space-y-8 py-10 text-left items-left">
        <h1 className="text-3xl font-bold text-left text-white dark:text-gray-100">
          schematic
        </h1>
        <div className="self-center">
          <Image
            src="/schematic.png"
            alt="schematic"
            height={900}
            width={1000}
            priority
          />
        </div>
      </div>

      <p className="hidden w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Are you an investor?&nbsp;
        <a href="/manifesto" className="font-bold">
          Check out our manifesto here.
        </a>
      </p>

      <div className="flex flex-row space-x-8 py-10 text-left items-center justify-between">
        <p>
          Contact us:&nbsp;
          <a href="mailto:arjun@flowy.live" className="font-bold">team@flowy.live</a>
        </p>
        <p className="text-gray-500 text-xs">© Flowy Inc. 2024 All rights reserved.</p>
      </div>
    </main>
  );
}
