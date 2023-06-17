import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
            relative 
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
      Dontsueme
    </Link>
  );
}
