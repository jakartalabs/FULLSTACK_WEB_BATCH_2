import React from 'react'
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="w-full">
      <NavSearch />
      <NavMenu />
    </div>
  )
}

export default Header
