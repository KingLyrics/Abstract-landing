import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import SearchResults from "../src/";

export default function App() {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = () => {
    window.location.href = `/search-results?query=${searchTerm}`;
  };

  return (
    <div>
      <nav className="bg-black text-white flex justify-between p-6 md:pr-24 md:pl-24 items-center w-full">
        <div className="flex space-x-2 items-center ">
          <h1 className="flex text-xl border-r-2 pr-2 items-center cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 pr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Abstract
          </h1>
          <h2 className="text-xl font-light  cursor-pointer">Help Center</h2>
        </div>
        <div className="space-x-4 hidden md:block">
          <button className=" bg-slate-950 px-9 rounded-md border border-offGray text-white  py-2 text-xl">
            Submit a Request
          </button>
          <button className="bg-lightBlue px-4 py-2 text-xl text-white rounded-md">
            Sign In
          </button>
        </div>
        <div className="flex space-x-2 items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>

      <main className="bg-offGray h-[300px] md:h-[320px] ">
        <div className=" font-medium flex flex-col text-center pt-[20%] md:pt-16 space-y-8">
          <h1 className="text-3xl md:text-6xl">How can we help?</h1>
          <div className="relative">
            <i className="absolute top-3 left-[82%] md:left-[69%] md:top-[19px] outline-lightBlue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
              onClick={handleSearch}
              className="border border-black max-w-xs mx-auto h-[50px] pl-3 w-[300px] outline-lightBlue rounded-sm shadow-xl md:max-w-4xl md:w-[600px] md:h-[60px] hover:outline-lightBlue"
              placeholder="Search"
            />
          </div>
        </div>
      </main>
      <section className="mt-24 mb-20">
        <div className="grid grid-cols-1 space-y-10 md:grid-cols-2 ">
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
            title="Using Abstract"
          />
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
            title="Manage Your Account"
          />
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
            title="Manage, Oraganizations, teams, and projects"
          />
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
            title="Manage Billing"
          />
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
            title="Authenticate to Abstract
"
          />
          <Card
            src="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
            title="Abstract support
"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
