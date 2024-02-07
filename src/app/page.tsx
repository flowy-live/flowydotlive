"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const enterWaitlist = useCallback(async () => {
    if (email === "") {
      setIsError(true);
      return;
    }

    try {
      const response = await fetch(`https://api.flowy.live:5443/waitlist/${email}`, {
        method: "POST",
      });
      if (response.status === 200) {
        setIsError(false);
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (e) {
      setIsError(true);
    }
  }, [email, setIsError]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [setEmail]);

  return (
    <main className="bg-[#1e1e1e] flex min-h-screen flex-col lg:p-24 p-5">
      <div className="self-center before:absolute before:h-[100px] before:w-full sm:before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute before:z-[1] after:z-2 after:h-[70px] after:w-full sm:after:w-[120px] after:translate-x-1/3 after:-translate-y-16 after:bg-gradient-conic after:from-purple-200 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-dark-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-teal-900 after:dark:opacity-40 before:lg:h-[360px] z-4 py-4">
        <Image
          src="/flowy-long-logo.svg"
          alt="Flowy Logo"
          height={20}
          width={100}
          priority
        />
      </div>

      <div className="max-w-[800px] self-center flex flex-col space-y-8 py-10 text-center items-center">
        <h1 className="text-5xl lg:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-white from-10% to-teal-500 pb-2">
          Out with the old, in with the new.
        </h1>


        <div className="max-w-[500px] text-center items-center flex flex-col space-y-8">
          <p className="text-white text-lg">
            We shouldn't need endless threads, calendars, notifications, and apps to get to our team. Move lighter and faster with flowy -
            a minimalist, voice-first <b><u className="text-orange-200">(hand-held) device for remote teams.</u></b>
          </p>

          <Image
            src="/alternatives.png"
            alt="Alternatives"
            height={100}
            width={200}
            priority
          />

        </div>

        <div className="flex flex-row space-x-2">
          {isSuccess ? <p className="text-green-500">You've been added to the waitlist!</p> :
            <>
              <input value={email} onChange={handleEmailChange} type="email" placeholder="email address" className="p-2 bg-gray-800 text-white rounded-md placeholder:text-sm" />
              <button onClick={enterWaitlist} className="bg-gradient-to-r from-black to-gray-900 p-2 rounded-md font-semibold">Join waitlist</button>
            </>}
        </div>
        {isError && <p className="text-red-500">Please enter a valid email address</p>}
      </div>

      <div className="flex flex-col space-y-8 py-10 text-left items-left">
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

      <div className="flex flex-col items-center py-20">
        <h1 className="text-5xl font-bold text-white dark:text-gray-100">
          How it works
        </h1>
        <p className="text-gray-500">
          Think walkie-talkie + voicemail.
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-3 flex flex-col gap-2 py-10">
          <div className="flex flex-col space-y-8 text-left bg-gray-950 p-10 rounded-lg shadow-lg items-center">
            <h1 className="text-2xl font-bold text-center text-white text-wrap">
              Tune into your <i>core</i> team.
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
            <h1 className="text-2xl text-center font-bold text-white text-wrap">
              Instantly get to your <i>core</i> team.
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
            <h1 className="text-2xl text-center font-bold text-white text-wrap">
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
      </div>


      <p className="hidden w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Are you an investor?&nbsp;
        <a href="/manifesto" className="font-bold">
          Check out our manifesto here.
        </a>
      </p>

      <div className="flex flex-row space-x-8 py-10 text-left items-center justify-between">
        <p>
          Have questions? Contact us:&nbsp;
          <a href="mailto:arjun@flowy.live" className="font-bold">team@flowy.live</a>
        </p>
        <p className="text-gray-500 text-xs">© Flowy Inc. 2024 All rights reserved.</p>
      </div>
    </main>
  );
}
