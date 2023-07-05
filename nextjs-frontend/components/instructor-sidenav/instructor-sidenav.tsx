"use client";

import Link from "next/link";
import { forwardRef, useState } from "react";

const InstructorSidenav = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      {...props}
      ref={ref}
      className={`flex w-[60px] flex-col bg-zinc-900 py-4 text-white ${props.className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      style={{
        transition: "width 0.4s ease-in-out",
        width: isExpanded ? "300px" : "55px",
      }}
    >
      {/* sidenav body  */}
      <div className="sticky top-5 overflow-x-clip">
        <div
          className="
            relative
            mx-5 
            cursor-pointer 
            text-xl
            font-bold
            before:absolute
            before:left-0
            before:top-[-3px]
            before:block
            before:h-[12px]
            before:w-[12px]
            before:rotate-[45deg]
            before:border-l-[4px]
            before:border-t-[4px]
            before:border-fuchsia-600
            before:content-['']
          "
        >
          <span>D</span>
          <span
            style={{
              transitionProperty: "opacity",
              transitionDuration: "0.5s",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            ontsueme
          </span>
        </div>

        <div className="mt-5 [&>*]:px-3">
          <Link
            className="flex w-full cursor-pointer select-none gap-6 border-l-4 border-fuchsia-600 py-4 hover:bg-zinc-700"
            href=""
          >
            <span className="material-icons">ondemand_video</span>
            <span
              style={{
                transitionProperty: "opacity",
                transitionDuration: "0.5s",
                opacity: isExpanded ? 1 : 0,
              }}
              className="font-bold"
            >
              Courses
            </span>
          </Link>

          <Link
            className="flex w-full cursor-pointer select-none gap-6 py-4 hover:bg-zinc-700"
            href=""
          >
            <span className="material-icons-outlined">chat</span>
            <span
              style={{
                transitionProperty: "opacity",
                transitionDuration: "0.5s",
                opacity: isExpanded ? 1 : 0,
              }}
              className="font-bold"
            >
              Communication
            </span>
          </Link>

          <Link
            className="flex w-full cursor-pointer select-none gap-6 py-4 hover:bg-zinc-700"
            href=""
          >
            <span className="material-icons">bar_chart</span>
            <span
              style={{
                transitionProperty: "opacity",
                transitionDuration: "0.5s",
                opacity: isExpanded ? 1 : 0,
              }}
              className="font-bold"
            >
              Performance
            </span>
          </Link>

          <Link
            className="flex w-full cursor-pointer select-none gap-6 py-4 hover:bg-zinc-700"
            href=""
          >
            <span className="material-icons-outlined">build</span>
            <span
              style={{
                transitionProperty: "opacity",
                transitionDuration: "0.5s",
                opacity: isExpanded ? 1 : 0,
              }}
              className="font-bold"
            >
              Tools
            </span>
          </Link>

          <Link
            className="flex w-full cursor-pointer select-none gap-6 py-4 hover:bg-zinc-700"
            href=""
          >
            <span className="material-icons">help_outline</span>
            <span
              style={{
                transitionProperty: "opacity",
                transitionDuration: "0.5s",
                opacity: isExpanded ? 1 : 0,
              }}
              className="font-bold"
            >
              Resources
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
});

InstructorSidenav.displayName = "InstructorSidenav";

export default InstructorSidenav;
