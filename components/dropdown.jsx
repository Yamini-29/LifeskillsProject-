"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AccountDropdown2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="mb-3.5 inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-stroke bg-white px-6 py-3 text-base font-medium text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            >
              Account
              <span
                className={`duration-100 ${dropdownOpen ? "-scale-y-100" : ""}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 top-full w-[240px] divide-y divide-stroke overflow-hidden rounded-lg bg-white dark:divide-dark-3 dark:bg-dark-2 ${dropdownOpen ? "block" : "hidden"}`}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="relative aspect-square w-10 rounded-full">
                  <img
                    src="https://cdn.tailgrids.com/2.2/assets/core-components/images/account-dropdowns/image-1.jpg"
                    alt="account"
                    className="w-full rounded-full object-cover object-center"
                  />
                  <span className="absolute -right-0.5 -top-0.5 block h-3.5 w-3.5 rounded-full border-2 border-white bg-green dark:border-dark"></span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark dark:text-white">
                    Andrio Miller
                  </p>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    miller@company.com
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7C6.125 7 4.625 5.525 4.625 3.725C4.625 1.925 6.125 0.449997 8 0.449997C9.875 0.449997 11.375 1.925 11.375 3.725C11.375 5.525 9.875 7 8 7ZM8 1.575C6.75 1.575 5.75 2.55 5.75 3.725C5.75 4.9 6.75 5.875 8 5.875C9.25 5.875 10.25 4.9 10.25 3.725C10.25 2.55 9.25 1.575 8 1.575Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.275 15.575C12.975 15.575 12.7 15.325 12.7 15V14.275C12.7 11.675 10.6 9.575 8.00003 9.575C5.40002 9.575 3.30002 11.675 3.30002 14.275V15C3.30002 15.3 3.05002 15.575 2.72502 15.575C2.40002 15.575 2.15002 15.325 2.15002 15V14.275C2.15002 11.05 4.77502 8.45 7.97502 8.45C11.175 8.45 13.8 11.075 13.8 14.275V15C13.825 15.3 13.575 15.575 13.275 15.575Z"
                        fill="currentColor"
                      />
                    </svg>
                    View profile
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2453_19971)">
                        <path
                          d="M15.175 6.45C14.925 6.175 14.575 6.025 14.2 6.025H14.125C14 6.025 13.9 5.95 13.875 5.85C13.85 5.75 13.8 5.675 13.775 5.575C13.725 5.475 13.775 5.375 13.85 5.3L13.9 5.25C14.175 5 14.325 4.65 14.325 4.275C14.325 3.9 14.2 3.55 13.925 3.275L12.95 2.275C12.425 1.725 11.525 1.7 10.975 2.25L10.9 2.3C10.825 2.375 10.7 2.4 10.575 2.35C10.475 2.3 10.375 2.25 10.25 2.225C10.125 2.175 10.05 2.075 10.05 1.975V1.85C10.05 1.075 9.42504 0.449997 8.65004 0.449997H7.25004C6.87504 0.449997 6.52504 0.599997 6.27504 0.849997C6.00004 1.125 5.87504 1.475 5.87504 1.825V1.925C5.87504 2.025 5.80004 2.125 5.70004 2.175C5.65004 2.2 5.62504 2.2 5.57504 2.225C5.47504 2.275 5.35004 2.25 5.27504 2.175L5.22504 2.1C4.97504 1.825 4.62504 1.675 4.25004 1.675C3.87504 1.675 3.52504 1.8 3.25004 2.075L2.25004 3.05C1.70004 3.575 1.67504 4.475 2.22504 5.025L2.27504 5.1C2.35004 5.175 2.37504 5.3 2.32504 5.375C2.27504 5.475 2.25004 5.55 2.20004 5.65C2.15004 5.75 2.07504 5.8 1.95004 5.8H1.87504C1.50004 5.8 1.15004 5.925 0.875041 6.2C0.600041 6.45 0.450041 6.8 0.450041 7.175L0.425041 8.575C0.400041 9.35 1.02504 9.975 1.80004 10H1.87504C2.00004 10 2.10004 10.075 2.12504 10.175C2.17504 10.25 2.22504 10.325 2.25004 10.425C2.27504 10.525 2.25004 10.625 2.17504 10.7L2.12504 10.75C1.85004 11 1.70004 11.35 1.70004 11.725C1.70004 12.1 1.82504 12.45 2.10004 12.725L3.07504 13.725C3.60004 14.275 4.50004 14.3 5.05004 13.75L5.12504 13.7C5.20004 13.625 5.32504 13.6 5.45004 13.65C5.55004 13.7 5.65004 13.75 5.77504 13.775C5.90004 13.825 5.97504 13.925 5.97504 14.025V14.125C5.97504 14.9 6.60004 15.525 7.37504 15.525H8.77504C9.55004 15.525 10.175 14.9 10.175 14.125V14.025C10.175 13.925 10.25 13.825 10.35 13.775C10.4 13.75 10.425 13.75 10.475 13.725C10.6 13.675 10.7 13.7 10.775 13.775L10.825 13.85C11.075 14.125 11.425 14.275 11.8 14.275C12.175 14.275 12.525 14.15 12.8 13.875L13.8 12.9C14.35 12.375 14.375 11.475 13.825 10.925L13.775 10.85C13.7 10.775 13.675 10.65 13.725 10.575C13.775 10.475 13.8 10.4 13.85 10.3C13.9 10.2 14 10.15 14.1 10.15H14.175H14.2C14.95 10.15 15.575 9.55 15.6 8.775L15.625 7.375C15.575 7.075 15.425 6.7 15.175 6.45ZM14.425 8.8C14.425 8.95 14.3 9.075 14.15 9.075H14.075H14.05C13.475 9.075 12.95 9.425 12.75 9.925C12.725 10 12.675 10.075 12.65 10.15C12.425 10.65 12.525 11.275 12.925 11.675L12.975 11.75C13.075 11.85 13.075 12.025 12.975 12.125L11.975 13.1C11.9 13.175 11.825 13.175 11.775 13.175C11.725 13.175 11.65 13.175 11.575 13.1L11.525 13.025C11.125 12.6 10.525 12.475 9.97504 12.725L9.87504 12.775C9.32504 13 8.97504 13.5 8.97504 14.075V14.175C8.97504 14.325 8.85004 14.45 8.70004 14.45H7.30004C7.15004 14.45 7.02504 14.325 7.02504 14.175V14.075C7.02504 13.5 6.67504 12.975 6.12504 12.775C6.05004 12.75 5.95004 12.7 5.87504 12.675C5.67504 12.575 5.47504 12.55 5.27504 12.55C4.92504 12.55 4.57504 12.675 4.30004 12.95L4.25004 12.975C4.15004 13.075 3.97504 13.075 3.87504 12.975L2.90004 11.975C2.82504 11.9 2.82504 11.825 2.82504 11.775C2.82504 11.725 2.82504 11.65 2.90004 11.575L2.95004 11.525C3.37504 11.125 3.50004 10.5 3.27504 10C3.25004 9.925 3.22504 9.85 3.17504 9.775C2.97504 9.25 2.47504 8.875 1.90004 8.875H1.82504C1.67504 8.875 1.55004 8.75 1.55004 8.6L1.57504 7.2C1.57504 7.1 1.62504 7.05 1.65004 7C1.67504 6.975 1.75004 6.925 1.85004 6.925H1.92504C2.50004 6.95 3.02504 6.6 3.25004 6.075C3.27504 6 3.32504 5.925 3.35004 5.85C3.57504 5.35 3.47504 4.725 3.07504 4.325L3.02504 4.25C2.92504 4.15 2.92504 3.975 3.02504 3.875L4.02504 2.9C4.10004 2.825 4.17504 2.825 4.22504 2.825C4.27504 2.825 4.35004 2.825 4.42504 2.9L4.47504 2.975C4.87504 3.4 5.47504 3.525 6.02504 3.3L6.12504 3.25C6.67504 3.025 7.02504 2.525 7.02504 1.95V1.85C7.02504 1.75 7.07504 1.7 7.10004 1.65C7.12504 1.6 7.20004 1.575 7.30004 1.575H8.70004C8.85004 1.575 8.97504 1.7 8.97504 1.85V1.95C8.97504 2.525 9.32504 3.05 9.87504 3.25C9.95004 3.275 10.05 3.325 10.125 3.35C10.65 3.6 11.275 3.5 11.7 3.1L11.775 3.05C11.875 2.95 12.05 2.95 12.15 3.05L13.125 4.05C13.2 4.125 13.2 4.2 13.2 4.25C13.2 4.3 13.175 4.375 13.125 4.45L13.075 4.5C12.625 4.875 12.5 5.5 12.7 6C12.725 6.075 12.75 6.15 12.8 6.225C13 6.75 13.5 7.125 14.075 7.125H14.15C14.25 7.125 14.3 7.175 14.35 7.2C14.4 7.225 14.425 7.3 14.425 7.4V8.8Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.0001 4.59999C6.1251 4.59999 4.6001 6.12499 4.6001 7.99999C4.6001 9.87499 6.1251 11.4 8.0001 11.4C9.8751 11.4 11.4001 9.87499 11.4001 7.99999C11.4001 6.12499 9.8751 4.59999 8.0001 4.59999ZM8.0001 10.275C6.7501 10.275 5.7251 9.24999 5.7251 7.99999C5.7251 6.74999 6.7501 5.72499 8.0001 5.72499C9.2501 5.72499 10.2751 6.74999 10.2751 7.99999C10.2751 9.24999 9.2501 10.275 8.0001 10.275Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2453_19971">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Settings
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2.975H2.00005C1.15005 2.975 0.425049 3.675 0.425049 4.55V11.45C0.425049 12.3 1.12505 13.025 2.00005 13.025H14C14.85 13.025 15.575 12.325 15.575 11.45V4.55C15.575 3.675 14.85 2.975 14 2.975ZM14.45 11.45C14.45 11.7 14.25 11.9 14 11.9H2.00005C1.75005 11.9 1.55005 11.7 1.55005 11.45V4.55C1.55005 4.3 1.75005 4.1 2.00005 4.1H14C14.25 4.1 14.45 4.3 14.45 4.55V11.45Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.55 9.725H5.45C5.15 9.725 4.875 9.975 4.875 10.3C4.875 10.625 5.125 10.875 5.45 10.875H10.55C10.85 10.875 11.125 10.625 11.125 10.3C11.125 9.975 10.85 9.725 10.55 9.725Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5.87505 6C5.87505 5.7 5.62505 5.425 5.30005 5.425H4.87505C4.57505 5.425 4.30005 5.675 4.30005 6C4.30005 6.325 4.55005 6.575 4.87505 6.575H5.30005C5.62505 6.575 5.87505 6.325 5.87505 6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.77507 6.575H8.20007C8.50007 6.575 8.77507 6.325 8.77507 6C8.77507 5.675 8.52507 5.425 8.20007 5.425H7.77507C7.47507 5.425 7.20007 5.675 7.20007 6C7.20007 6.325 7.47507 6.575 7.77507 6.575Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.125 5.45H10.7C10.4 5.45 10.125 5.7 10.125 6.025C10.125 6.35 10.375 6.6 10.7 6.6H11.125C11.425 6.6 11.7 6.35 11.7 6.025C11.7 5.7 11.425 5.45 11.125 5.45Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.325 8.5H6.75C7.05 8.5 7.325 8.25 7.325 7.95C7.325 7.65 7.075 7.375 6.75 7.375H6.325C6.025 7.375 5.75 7.625 5.75 7.95C5.75 8.275 6.025 8.5 6.325 8.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.22503 8.5H9.65002C9.95002 8.5 10.225 8.25 10.225 7.95C10.225 7.65 9.97502 7.375 9.65002 7.375H9.22503C8.92503 7.375 8.65002 7.625 8.65002 7.95C8.65002 8.275 8.92503 8.5 9.22503 8.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    Keyboard shortcuts
                  </span>
                  <span className="text-xs text-dark-5"> ⌘K </span>
                </a>
              </div>
              <div>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2453_19988)">
                        <path
                          d="M15.1 1.925L15.025 1.85C12.95 -0.0500008 9.79995 -0.0500008 7.72495 1.85L7.64995 1.925C7.52495 2.025 7.47495 2.175 7.47495 2.35V6.425H2.14995C1.34995 6.425 0.699951 7.075 0.699951 7.875V14.15C0.699951 14.95 1.34995 15.6 2.14995 15.6H13.65C14.55 15.6 15.275 14.875 15.275 13.975V2.35C15.3 2.175 15.225 2.025 15.1 1.925ZM1.82495 14.125V7.85C1.82495 7.675 1.97495 7.525 2.14995 7.525H7.44995V14.425H2.14995C1.97495 14.45 1.82495 14.3 1.82495 14.125ZM10.8 14.45V12.95C10.8 12.6 11.075 12.325 11.425 12.325C11.775 12.325 12.05 12.6 12.05 12.95V14.45H10.8ZM14.175 13.925C14.175 14.2 13.95 14.425 13.675 14.425H13.175V12.925C13.175 11.95 12.4 11.175 11.425 11.175C10.45 11.175 9.67495 11.95 9.67495 12.925V14.425H8.57495V6.975V2.6C10.2 1.225 12.55 1.225 14.175 2.6V13.925Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2453_19988">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Company profile
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2404_1284)">
                        <path
                          d="M10.5499 7.425H8.5499V5.45C8.5499 5.15 8.2999 4.9 7.9749 4.9C7.6749 4.9 7.4249 5.15 7.4249 5.475V7.45H5.4499C5.1499 7.45 4.8999 7.7 4.8999 8.025C4.8999 8.325 5.1499 8.575 5.4749 8.575H7.4499V10.55C7.4499 10.85 7.6999 11.1 8.0249 11.1C8.3249 11.1 8.5749 10.85 8.5749 10.525V8.55H10.5499C10.8499 8.55 11.0999 8.3 11.0999 7.975C11.0999 7.675 10.8499 7.425 10.5499 7.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.99995 0.45C3.82495 0.45 0.449951 3.825 0.449951 8C0.449951 12.175 3.84995 15.575 8.02495 15.575C12.2 15.575 15.6 12.175 15.6 8C15.575 3.825 12.175 0.45 7.99995 0.45ZM7.99995 14.45C4.44995 14.45 1.57495 11.55 1.57495 8C1.57495 4.45 4.44995 1.575 7.99995 1.575C11.55 1.575 14.45 4.45 14.45 8C14.45 11.55 11.55 14.45 7.99995 14.45Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2404_1284">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Menu Item
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2404_1284)">
                        <path
                          d="M10.5499 7.425H8.5499V5.45C8.5499 5.15 8.2999 4.9 7.9749 4.9C7.6749 4.9 7.4249 5.15 7.4249 5.475V7.45H5.4499C5.1499 7.45 4.8999 7.7 4.8999 8.025C4.8999 8.325 5.1499 8.575 5.4749 8.575H7.4499V10.55C7.4499 10.85 7.6999 11.1 8.0249 11.1C8.3249 11.1 8.5749 10.85 8.5749 10.525V8.55H10.5499C10.8499 8.55 11.0999 8.3 11.0999 7.975C11.0999 7.675 10.8499 7.425 10.5499 7.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.99995 0.45C3.82495 0.45 0.449951 3.825 0.449951 8C0.449951 12.175 3.84995 15.575 8.02495 15.575C12.2 15.575 15.6 12.175 15.6 8C15.575 3.825 12.175 0.45 7.99995 0.45ZM7.99995 14.45C4.44995 14.45 1.57495 11.55 1.57495 8C1.57495 4.45 4.44995 1.575 7.99995 1.575C11.55 1.575 14.45 4.45 14.45 8C14.45 11.55 11.55 14.45 7.99995 14.45Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2404_1284">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Invite colleagues
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 5.775H4.925C4.625 5.775 4.375 5.525 4.375 5.225C4.375 4.925 4.625 4.675 4.925 4.675H13.8L12.65 3.325C12.45 3.075 12.475 2.725 12.725 2.525C12.975 2.325 13.325 2.35 13.525 2.6L15.45 4.875C15.6 5.05 15.625 5.275 15.525 5.475C15.425 5.65 15.225 5.775 15 5.775Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2.92494 13.625C2.77494 13.625 2.59994 13.55 2.49994 13.425L0.574941 11.15C0.424941 10.975 0.399941 10.75 0.499941 10.55C0.599941 10.35 0.799941 10.225 0.999941 10.225H11.0749C11.3749 10.225 11.6249 10.475 11.6249 10.775C11.6249 11.075 11.3749 11.325 11.0749 11.325H2.19994L3.34994 12.675C3.54994 12.925 3.52494 13.275 3.27494 13.475C3.17494 13.6 3.04994 13.625 2.92494 13.625Z"
                        fill="currentColor"
                      />
                    </svg>
                    Changelog
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2453_20006)">
                        <path
                          d="M6.32551 3.87503H5.25051C4.42551 3.87503 3.72551 3.32503 3.55051 2.57503C3.42551 2.00004 3.60051 1.40004 4.00051 0.975035C4.42551 0.550035 5.00051 0.400036 5.57551 0.525036C6.32551 0.700036 6.87551 1.42504 6.87551 2.25004V3.32503C6.87551 3.60003 6.62551 3.87503 6.32551 3.87503ZM4.65051 2.30004C4.70051 2.55003 4.97551 2.72503 5.27551 2.72503H5.77551V2.22504C5.77551 1.92504 5.60051 1.65004 5.35051 1.60004C5.15051 1.55004 4.95051 1.60004 4.82551 1.75004C4.65051 1.90004 4.60051 2.10004 4.65051 2.30004Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.4004 8.32495H2.7754C1.60039 8.32495 0.650391 7.37495 0.650391 6.19995C0.650391 5.02495 1.60039 4.07495 2.7754 4.07495H5.3754C6.5504 4.07495 7.5004 5.02495 7.5004 6.19995C7.5004 7.37495 6.5504 8.32495 5.4004 8.32495ZM2.7754 5.19995C2.22539 5.19995 1.77539 5.64995 1.77539 6.19995C1.77539 6.74995 2.22539 7.19995 2.7754 7.19995H5.3754C5.9254 7.19995 6.3754 6.74995 6.3754 6.19995C6.3754 5.64995 5.9254 5.19995 5.3754 5.19995H2.7754Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9.75039 7.35005C8.60039 7.35005 7.65039 6.40005 7.65039 5.20005V2.57505C7.65039 1.40005 8.60039 0.425049 9.75039 0.425049C10.9004 0.425049 11.8504 1.37505 11.8504 2.57505V5.20005C11.8504 6.40005 10.9254 7.35005 9.75039 7.35005ZM9.75039 1.57505C9.20039 1.57505 8.77539 2.02505 8.77539 2.60005V5.22505C8.77539 5.77505 9.22539 6.25005 9.75039 6.25005C10.3004 6.25005 10.7254 5.80005 10.7254 5.22505V2.57505C10.7254 2.02505 10.3004 1.57505 9.75039 1.57505Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.0254 11.7H11.0004C9.85039 11.7 8.90039 10.775 8.90039 9.62505C8.90039 8.47505 9.85039 7.55005 11.0004 7.55005H13.0254C14.1754 7.55005 15.1254 8.47505 15.1254 9.62505C15.1254 10.775 14.1754 11.7 13.0254 11.7ZM11.0004 8.67505C10.4754 8.67505 10.0254 9.10005 10.0254 9.62505C10.0254 10.15 10.4504 10.575 11.0004 10.575H13.0254C13.5504 10.575 14.0004 10.15 14.0004 9.62505C14.0004 9.10005 13.5754 8.67505 13.0254 8.67505H11.0004Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6.625 15.2001C5.525 15.2001 4.625 14.2751 4.625 13.1251V11.0501C4.625 9.9001 5.525 8.9751 6.625 8.9751C7.725 8.9751 8.625 9.9001 8.625 11.0501V13.1251C8.625 14.2751 7.725 15.2001 6.625 15.2001ZM6.625 10.1251C6.15 10.1251 5.75 10.5501 5.75 11.0751V13.1501C5.75 13.6751 6.15 14.1001 6.625 14.1001C7.1 14.1001 7.5 13.6751 7.5 13.1501V11.0751C7.5 10.5501 7.125 10.1251 6.625 10.1251Z"
                          fill="currentColor"
                        />
                        <path
                          d="M13.6508 7.02495H12.6258C12.3258 7.02495 12.0508 6.77495 12.0508 6.44995V5.42495C12.0508 4.62495 12.5758 3.92495 13.3008 3.74995C13.8508 3.62495 14.4258 3.77495 14.8258 4.17495C15.2258 4.57495 15.4008 5.14995 15.2758 5.72495C15.1258 6.49995 14.4258 7.02495 13.6508 7.02495ZM13.2008 5.89995H13.6508C13.9258 5.89995 14.1508 5.72495 14.2008 5.49995C14.2508 5.29995 14.2008 5.12495 14.0508 4.99995C13.9258 4.87495 13.7508 4.82495 13.5758 4.87495C13.3508 4.92495 13.2008 5.17495 13.2008 5.44995V5.89995Z"
                          fill="currentColor"
                        />
                        <path
                          d="M2.42492 12.1C1.99992 12.1 1.57492 11.925 1.27492 11.625C0.874925 11.225 0.699925 10.65 0.824925 10.075C0.999925 9.35005 1.67492 8.80005 2.47492 8.80005H3.49992C3.79992 8.80005 4.07492 9.05005 4.07492 9.37505V10.4C4.07492 11.2 3.54992 11.9 2.82492 12.075C2.67492 12.075 2.54992 12.1 2.42492 12.1ZM2.47492 9.92505C2.19992 9.92505 1.97492 10.1 1.92492 10.325C1.87492 10.525 1.92492 10.7 2.07492 10.825C2.19992 10.95 2.37492 11 2.54992 10.95C2.77492 10.9 2.92492 10.65 2.92492 10.375V9.92505H2.47492Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.8252 15.5501C10.7002 15.5501 10.5752 15.5251 10.4502 15.5001C9.7252 15.3251 9.2002 14.6251 9.2002 13.8251V12.8001C9.2002 12.5001 9.4502 12.2251 9.77519 12.2251H10.8002C11.6002 12.2251 12.2752 12.7501 12.4502 13.5001C12.5752 14.0751 12.4252 14.6501 12.0002 15.0501C11.6752 15.4001 11.2502 15.5501 10.8252 15.5501ZM10.3252 13.4001V13.8501C10.3252 14.1251 10.5002 14.3751 10.7002 14.4251C10.8752 14.4751 11.0502 14.4251 11.1752 14.3001C11.3002 14.1751 11.3502 13.9751 11.3252 13.8001C11.2752 13.5751 11.0252 13.4001 10.7752 13.4001H10.3252Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2453_20006">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Slack Community
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.3001 6.45001C3.9751 6.45001 3.7251 6.70001 3.7251 7.02501C3.7251 7.35001 3.9751 7.60001 4.3001 7.60001C4.6251 7.60001 4.8751 7.35001 4.8751 7.02501C4.8751 6.70001 4.6001 6.45001 4.3001 6.45001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.75005 6.45001C7.42505 6.45001 7.17505 6.70001 7.17505 7.02501C7.17505 7.35001 7.42505 7.60001 7.75005 7.60001C8.07505 7.60001 8.32505 7.35001 8.32505 7.02501C8.32505 6.70001 8.05005 6.45001 7.75005 6.45001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.2 6.45001C10.875 6.45001 10.625 6.70001 10.625 7.02501C10.625 7.35001 10.875 7.60001 11.2 7.60001C11.525 7.60001 11.775 7.35001 11.775 7.02501C11.775 6.70001 11.525 6.45001 11.2 6.45001Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.55 1.97501H2.00005C1.15005 1.97501 0.425049 2.67501 0.425049 3.55001V12.975C0.425049 13.375 0.650049 13.75 1.02505 13.925C1.17505 14 1.32505 14.025 1.47505 14.025C1.72505 14.025 1.95005 13.95 2.15005 13.775L4.27505 12.025H10.55C13.325 12.025 15.575 9.77501 15.575 7.00001C15.575 4.22501 13.3 1.97501 10.55 1.97501ZM10.55 10.9H4.07505C3.95005 10.9 3.82505 10.95 3.72505 11.025L1.57505 12.8V3.55001C1.57505 3.30001 1.77505 3.10001 2.02505 3.10001H10.575C12.725 3.10001 14.475 4.85001 14.475 7.00001C14.45 9.15001 12.7 10.9 10.55 10.9Z"
                        fill="currentColor"
                      />
                    </svg>
                    Support
                  </span>
                </a>
                <a
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2453_20023)">
                        <path
                          d="M13.275 10.7C12.5 10.7 11.85 11.2 11.6 11.9H11.2V9.475C12.8 9 13.925 7.525 13.925 5.85C13.925 4.9 13.575 3.975 12.925 3.275C12.4 2.7 11.65 2.275 10.85 2.125C10.4 1.425 9.74998 0.899997 8.99998 0.649997C8.64998 0.499997 8.24998 0.449997 7.79998 0.449997C5.89998 0.449997 4.32498 1.925 4.14998 3.775C2.74998 4 1.67498 5.2 1.67498 6.675C1.67498 8.275 3.07498 9.625 4.69998 9.625H4.79998V11.9H4.39998C4.17498 11.2 3.49998 10.7 2.72498 10.7C1.74998 10.7 0.974976 11.5 0.974976 12.45C0.974976 13.4 1.77498 14.2 2.72498 14.2C3.49998 14.2 4.14998 13.7 4.39998 13H5.37498C5.67498 13 5.94998 12.75 5.94998 12.425V7.025C5.94998 6.725 5.69998 6.45 5.37498 6.45C5.04998 6.45 4.79998 6.7 4.79998 7.025V8.5H4.69998C3.67498 8.5 2.79998 7.675 2.79998 6.675C2.79998 5.65 3.59998 4.85 4.62498 4.85H4.72498C5.02498 4.85 5.29998 4.6 5.29998 4.275V4.075C5.29998 2.675 6.42498 1.55 7.82498 1.55C8.12498 1.55 8.39998 1.6 8.62498 1.7C9.19998 1.9 9.69998 2.325 9.99998 2.9C10.1 3.05 10.25 3.175 10.425 3.2C11.05 3.275 11.65 3.575 12.075 4.025C12.525 4.525 12.8 5.175 12.8 5.85C12.8 6.925 12.175 7.875 11.2 8.275V7.025C11.2 6.725 10.95 6.45 10.625 6.45C10.3 6.45 10.05 6.7 10.05 7.025V12.45C10.05 12.75 10.3 13.025 10.625 13.025H11.6C11.825 13.725 12.5 14.225 13.275 14.225C14.25 14.225 15.025 13.425 15.025 12.475C15.025 11.525 14.225 10.7 13.275 10.7ZM2.72498 13.075C2.37498 13.075 2.09998 12.8 2.09998 12.45C2.09998 12.1 2.37498 11.825 2.72498 11.825C3.07498 11.825 3.34998 12.1 3.34998 12.45C3.34998 12.8 3.07498 13.075 2.72498 13.075ZM13.275 13.075C12.925 13.075 12.65 12.8 12.65 12.45C12.65 12.1 12.925 11.825 13.275 11.825C13.625 11.825 13.9 12.1 13.9 12.45C13.9 12.8 13.625 13.075 13.275 13.075Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.575 12.15V7.025C8.575 6.725 8.325 6.45 8 6.45C7.7 6.45 7.425 6.7 7.425 7.025V12.15C6.75 12.375 6.25 13.025 6.25 13.8C6.25 14.775 7.05 15.55 8 15.55C8.975 15.55 9.75 14.75 9.75 13.8C9.75 13.025 9.25 12.375 8.575 12.15ZM8 14.45C7.65 14.45 7.375 14.175 7.375 13.825C7.375 13.475 7.65 13.2 8 13.2C8.35 13.2 8.625 13.475 8.625 13.825C8.625 14.175 8.35 14.45 8 14.45Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2453_20023">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    API
                  </span>
                </a>
              </div>
              <div>
                <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                  <span className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3 0.449997H8.47502C7.82502 0.449997 7.27502 0.999997 7.27502 1.65V3.375C7.27502 3.675 7.52502 3.925 7.82502 3.925C8.12502 3.925 8.40002 3.675 8.40002 3.375V1.625C8.40002 1.575 8.42502 1.55 8.47502 1.55H11.3C11.9 1.55 12.375 2.025 12.375 2.625V13.35C12.375 13.95 11.9 14.425 11.3 14.425H8.47502C8.42502 14.425 8.40002 14.4 8.40002 14.35V12.625C8.40002 12.325 8.15002 12.075 7.82502 12.075C7.50002 12.075 7.27502 12.325 7.27502 12.625V14.35C7.27502 15 7.82502 15.55 8.47502 15.55H11.3C12.525 15.55 13.5 14.55 13.5 13.35V2.65C13.5 1.425 12.5 0.449997 11.3 0.449997Z"
                        fill="currentColor"
                      />
                      <path
                        d="M4.39998 8.55H8.87498C9.17498 8.55 9.42498 8.3 9.42498 8C9.42498 7.7 9.17498 7.45 8.87498 7.45H4.42498L5.97498 5.875C6.19998 5.65 6.19998 5.3 5.97498 5.075C5.74998 4.85 5.39998 4.85 5.17498 5.075L2.67498 7.625C2.44998 7.85 2.44998 8.2 2.67498 8.425L5.17498 10.975C5.27498 11.075 5.42498 11.15 5.57498 11.15C5.72498 11.15 5.84998 11.1 5.97498 11C6.19998 10.775 6.19998 10.425 5.97498 10.2L4.39998 8.55Z"
                        fill="currentColor"
                      />
                    </svg>
                    Log out
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
