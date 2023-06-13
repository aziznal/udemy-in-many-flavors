export default function Header() {
  return (
    <header className="flex h-[75px] w-full flex-row items-center gap-5 bg-gray-100 px-7 shadow-md">
      <h1 className="cursor-pointer text-xl font-bold">Dontsueme</h1>

      <div className="text-sm hover:cursor-pointer hover:text-violet-600">
        Categories
      </div>

      <div className="flex flex-grow flex-row items-center gap-2 rounded-full border border-gray-400 bg-gray-200 px-4 text-sm  focus:border-violet-700">
        <span className="material-icons-outlined text-gray-500">search</span>

        <input
          className="flex h-[48px] w-full bg-transparent outline-none"
          placeholder="Search for anything"
        />
      </div>

      <div className="text-sm hover:cursor-pointer hover:text-violet-600">
        Teach on Udemy
      </div>

      <span className="material-icons-outlined">shopping_cart</span>

      <div className="flex flex-row gap-2 items-center">
        <button className="flex h-[42px] items-center border border-gray-900 px-4 text-sm font-bold hover:bg-gray-200">
          Log in
        </button>

        <button className="flex h-[42px] items-center bg-gray-900 px-4 text-sm font-bold text-white hover:bg-gray-800">
          Sign Up
        </button>

        <button className="material-icons-outlined h-[42px] w-[42px] border border-gray-900 ">
          language
        </button>
      </div>
    </header>
  );
}
