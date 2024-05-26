"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

const months = [3, 6, 12, 24, 36];

const MonthSelect = ({ selectedValue }: any) => {
  const [isHidden, setIsHidden] = useState(true);
  const [value, setValue] = useState(0);

  const listRef = useRef(null);
  const menuRef = useRef(null);

  const handleClick = (e: any) => {
    e.preventDefault();

    setValue(e.target.value);
    selectedValue(e);
  };

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (e.target !== listRef.current) {
        setIsHidden(true);
      }
    });
  }, []);

  return (
    <div className="inline-block">
      <button
        ref={listRef}
        onClick={(e) => {
          e.preventDefault();
          setIsHidden(!isHidden);
        }}
        className="relative border border-primary rounded-lg focus:outline-none bg-white flex items-center justify-between w-40 h-10 px-1"
      >
        <span className="pointer-events-none ml-3 text-primary">
          {value !== 0 ? `${value} month` : "Select Month"}
        </span>
        <span className="pointer-events-none">
          <ChevronUpDownIcon className="size-7 stroke-secondary stroke-1" />
        </span>

        {!isHidden && (
          <div
            ref={menuRef}
            className="absolute left-0 top-full min-w-full w-max mt-0.5"
          >
            <ul className="bg-white p-2 rounded-lg shadow-md border border-grey text-left">
              {months.map((m: any, idx: number) => (
                <li
                  key={idx}
                  value={m}
                  onClick={handleClick}
                  className="px-4 py-2 bg-white text-secondary rounded-md hover:bg-secondary hover:text-white cursor-default select-none"
                >
                  <span className="pointer-events-none">{`${m} month`}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default MonthSelect;
