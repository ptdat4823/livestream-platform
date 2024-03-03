"use client";
import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import { Eye, Search } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

const Input = ({
  id,
  type = "text",
  placeholder,
  className,
}: {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: ClassValue;
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={cn(
        "border-0 outline outline-1 outline-black rounded py-1 px-3 focus:outline-4 focus:outline-primary font-normal",
        className
      )}
    />
  );
};

const SearchInput = ({
  id,
  type = "text",
  popover,
  popoverPosition = "bottom-center",
  placeholder,
  className,
}: {
  id?: string;
  type?: string;
  popover?: ReactNode;
  popoverPosition?: "bottom-right" | "bottom-left" | "bottom-center";
  placeholder?: string;
  className?: ClassValue;
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const searchInputRef = useRef<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const popoverBottomStyle = "top-[140%]";
  const popoverBottomLeftStyle = popoverBottomStyle + " -right-1";
  const popoverBottomRightStyle = popoverBottomStyle + " -left-1";
  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target)
      ) {
        setShowPopover(false);
      }
    });
  }, []);
  return (
    <div
      ref={searchInputRef}
      className={cn("relative flex flex-row items-center")}
      onClick={() => setShowPopover(!showPopover)}
    >
      <label
        htmlFor={id}
        className="absolute start-2 cursor-pointer font-normal"
      >
        <Search />
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          "border-0 outline outline-1 outline-black rounded py-1 px-10 focus:outline-4 focus:outline-primary",
          className
        )}
      />
      <div
        ref={popoverRef}
        className={cn(
          "absolute select-none z-30",
          popoverPosition === "bottom-left" ? popoverBottomLeftStyle : "",
          popoverPosition === "bottom-right" ? popoverBottomRightStyle : "",
          popoverPosition === "bottom-center" ? popoverBottomStyle : "",
          showPopover ? "visible" : "hidden"
        )}
      >
        {popover}
      </div>
    </div>
  );
};

export { Input, SearchInput };
