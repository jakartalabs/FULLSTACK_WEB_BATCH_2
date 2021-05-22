import React from 'react'

function NavMenu() {
  const styleMenu ="px-6 py-2 flex items-center text-base font-medium leading-snug text-black hover:opacity-75";
  return (
    <div className="flex flex-wrap py-2 mt-6">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-100 rounded">
          <ul className="flex flex-col lg:flex-row list-none">
            <li className="nav-item">
              <a
                className={styleMenu}
                href="#pablo"
              >
                Bakery
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styleMenu}
                href="#pablo"
              >
                Fruit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={styleMenu}
                href="#pablo"
              >
                Vegetables
              </a>
            </li>
          </ul>
        </nav>
        <nav class="bg-grey-light p-3 rounded font-sans w-full m-4">
          <ol class="list-reset flex text-grey-dark">
            <li><a href="#" class="text-blue font-bold">Home</a></li>
            <li><span class="mx-2">/</span></li>
            <li><a href="#" class="text-blue font-bold">Library</a></li>
            <li><span class="mx-2">/</span></li>
            <li>Data</li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default NavMenu