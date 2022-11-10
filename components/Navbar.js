import { useState } from "react";
import Container from "@components/Container";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "#" },
    { text: "Books", href: "#" },
    { text: "Open Source", href: "#" },
  ];

  return (
    <header className="py-10">
      <Container>
        <div className="flex items-center relative">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(true)}>
              <img src="/assets/hamburger.svg" />
            </button>
          </div>
          <div className="w-6/12 lg:w-2/12 flex items-center justify-center lg:justify-start">
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-xl">E</div>
            Epictetus
          </div>
          <div className="w-3/12 flex justify-end lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <img src="/assets/search-mobile.svg" />
            </button>
          </div>
          <div className={`w-full bg-gradient-to-b from-gray-600 to-gray-900 fixed lg:static top-0 h-full p-10 lg:w-7/12 lg:bg-none transition-all ${offcanvas ? "left-0" : "-left-full"}`}>
            <button className="absolute right-10 top-10 lg:hidden" onClick={() => setOffcanvas(false)}>
              <img src="/assets/close.svg" />
            </button>
            <nav>
              <ul className="flex lg:space-x-14 lg:items-center flex-col space-y-4 lg:flex-row lg:space-y-0">
                <li>
                  <a className="hover:underline" href="#">
                    UI Design
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Front-End
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Back-End
                  </a>
                </li>
                <li className="relative">
                  <a className="hover:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <img src="/assets/dropdown.svg" className="ml-2" />
                  </a>
                  {dropdown && (
                    <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                      {dropdownList.map(({ text, href }) => (
                        <li key={text} className="border-white/5 border-b last:border-0">
                          <a href={href} className="flex py-3 px-6 hover:bg-gray-700/60 transition duration-300">
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className={`lg:w-3/12 absolute lg:static w-full left-0 transition-all ${search ? "top-0" : "-top-56"}`}>
            <button className="absolute right-3 top-3 lg:hidden" onClick={() => setSearch(!search)}>
              <img src="/assets/close.svg" />
            </button>
            <input type="text" className="bg-gray-700 py-3 px-12 lg:pr-6 w-full lg:rounded-full rounded-lg bg-search bg-no-repeat bg-[20px]" placeholder="Search ..." />
          </div>
        </div>
      </Container>
    </header>
  );
}
