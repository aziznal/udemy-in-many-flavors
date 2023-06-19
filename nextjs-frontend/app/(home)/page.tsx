import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-[100vw] flex-col pb-96 lg:w-[1340px]">
      <div className="relative flex h-[400px] w-full items-center justify-center bg-pink-100">
        <div>
          <span className="absolute bottom-auto left-4 top-auto flex h-10 w-10 -translate-y-3 cursor-pointer items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 text-white hover:bg-zinc-800">
            <span className="material-icons !text-[32px]">chevron_left</span>
          </span>
        </div>

        <div className="absolute left-20 top-20 h-[170px] w-[440px] bg-white p-6 shadow-lg">
          <h1 className="font-serif text-4xl font-bold">
            Learning that gets you
          </h1>

          <p className="mt-4 text-lg">
            Skills for your present (and your future). Get started with us.
          </p>
        </div>

        <Image
          width="1340"
          height="0"
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
          alt="Image"
        />

        <div>
          <span className="absolute bottom-auto right-4 top-auto flex h-10 w-10 -translate-y-3 cursor-pointer items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 text-white hover:bg-zinc-800">
            <span className="material-icons !text-[32px]">chevron_right</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col px-6">
        <h1 className="mt-8 font-serif text-4xl font-bold">
          A broad selection of courses
        </h1>

        <p className="my-4 text-lg">
          Choose from over 10 online video courses with new additions published
          god knows when
        </p>

        <div>Card Grid</div>
      </div>
    </div>
  );
}
