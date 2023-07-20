import React from "react";
import Section from "./Section";
import Image from "next/image";
import contact from "../../public/Programmer-Engineering-Development-Illustration-on-transparent-background-PNG.png";
const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Let's connect !">
      <div class="flex min-h-full w-full flex-col items-center justify-center px-2 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            class="mx-auto h-[24vh] w-auto"
            src={contact}
            alt="Your Company"
            width={200}
            height={200}
            className="w-full h-full"
          />
          <h2 class="mt-10 text-center text-3xl dark:bg-slate-900 bg-white p-5 font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 flex flex-col items-center justify-center px-10 w-full">
          <form class="w-[100%] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm lg:w-[50%] space-y-10 md:w-[70%]">
            <div className="w-full">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-lg font-medium dark:text-white leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autocomplete="current-password"
                  required
                  class=" px-3 h-[50px] dark:bg-white block w-full border-[2px] border-gray-200 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm "
                />
              </div>
            </div>
            <div className="w-full">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-lg font-medium dark:text-white leading-6 text-gray-900"
                >
                  Message
                </label>
              </div>
              <div class="mt-2 ">
                <textarea
                  id="messge"
                  name="messge"
                  type="messge"
                  placeholder="Message"
                  required
                  class="px-3 block dark:bg-white h-[50px] w-full border-[2px] border-gray-200 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm "
                  cols="30"
                  rows="10"
                ></textarea>
                <input />
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-2xl text-gray-500">Contact me !</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
