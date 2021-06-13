import React from "react";
import { createPopper } from "@popperjs/core";
import { connect } from 'react-redux';
import { logoutAction } from '../redux/actions'

const Dropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { color, logoutAction} = props;
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="relative inline-flex align-middle w-full">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            ref={btnDropdownRef}
            onClick={() => {
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover();
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              (color === "white" ? "bg-white " : bgColor + " ") +
              "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
            }
            style={{ minWidth: "12rem" }}
          >
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                (color === "white" ? " text-blueGray-700" : "text-white")
              }
              onClick={e => e.preventDefault()}
            >
              Address
            </a>
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                (color === "white" ? " text-blueGray-700" : "text-white")
              }
              onClick={e => e.preventDefault()}
            >
              Transaction
            </a>
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                (color === "white" ? " text-blueGray-700" : "text-white")
              }
              onClick={e => e.preventDefault()}
            >
              Profile
            </a>
            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
            <a
              href="#pablo"
              className={
                "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                (color === "white" ? " text-blueGray-700" : "text-white")
              }
              onClick={e => logoutAction()}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};


const actions = {
  logoutAction
}
export default connect(null, actions)(Dropdown)

