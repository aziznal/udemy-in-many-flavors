import { Button } from "./ui/button";
import Logo from "./ui/logo";
import TopRightCorner from "./Header/TopRightCorner";
import { getServerSession } from "@/utils/get-server-session";

export default function Header() {
  const session = getServerSession();

  return (
    <header className="flex h-[75px] w-full flex-row items-center gap-5 bg-white px-7 shadow-md">
      <Logo />

      <div className="text-sm hover:cursor-pointer hover:text-violet-600">
        Categories
      </div>

      <div className="flex flex-grow flex-row items-center gap-2 rounded-full border border-gray-800 bg-gray-100 px-4 text-sm  focus:border-violet-700">
        <span className="material-icons-outlined text-gray-500">search</span>

        <input
          className="flex h-[48px] w-full bg-transparent placeholder-gray-500 outline-none"
          placeholder="Search for anything"
        />
      </div>

      <div className="text-sm hover:cursor-pointer hover:text-violet-600">
        Teach on Udemy
      </div>

      <Button className="material-icons-outlined" variant={"icon"}>
        shopping_cart
      </Button>

      <TopRightCorner isServerAuthenticated={session !== null} />
    </header>
  );
}
