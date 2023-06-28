import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page_Teaching() {
  return (
    <div className="m-0 flex h-full flex-col items-center justify-start p-0">
      <TeachingHeader />

      <h1 className="mb-12 mt-24 font-serif text-5xl font-bold">
        So many reasons to start
      </h1>

      <TeachingReasons />

      <StatsBanner />

      <h1 className="font-serif text-5xl font-bold">How to begin</h1>

      <div className="pb-48"></div>
    </div>
  );
}

const TeachingHeader = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center lg:px-16">
        <Image
          src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
          width={2000}
          height={2000}
          className="w-full"
          alt="woman on header inviting you to become a teacher with an inticing smile"
        />

        <div className="absolute left-8 flex w-[330px] flex-col gap-3 lg:left-[17%]">
          <h1 className="font-serif text-6xl font-bold">Come teach with us</h1>

          <p className="text-xl">
            Become an instructor and change lives — including your own
          </p>

          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
};

const TeachingReasons = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-36">
        <div className="flex w-[350px] flex-col items-center justify-center text-center">
          <Image
            src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg"
            width={100}
            height={100}
            alt="Teach your way"
          />

          <h2 className="mt-3 text-lg font-bold">Teach your way</h2>

          <p>
            Publish the course you want, in the way you want, and always have
            control of your own content
          </p>
        </div>

        <div className="flex w-[350px] flex-col items-center justify-center text-center">
          <Image
            src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg"
            width={100}
            height={100}
            alt="Teach your way"
          />

          <h2 className="mt-3 text-lg font-bold">Inspire Learners</h2>

          <p>
            Teach what you know and help learners explore their interests, gain
            new skills, and advance their careers.
          </p>
        </div>

        <div className="flex w-[350px] flex-col items-center justify-center text-center">
          <Image
            src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg"
            width={100}
            height={100}
            alt="Teach your way"
          />

          <h2 className="mt-3 text-lg  font-bold">Get Rewarded</h2>

          <p>
            Expand your professional network, build your expertise, and earn
            money on each paid enrollment.
          </p>
        </div>
      </div>
    </>
  );
};

const StatsBanner = () => {
  return (
    <div className="my-24 flex w-full flex-wrap items-center justify-center gap-32 bg-violet-700 p-16 text-white">
      <div className="flex flex-col items-center">
        <h3 className="text-[2.5rem] font-bold leading-[2.5rem]">62M</h3>
        <span>Students</span>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[2.5rem] font-bold leading-[2.5rem]">75+</h3>
        <span>Languages</span>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[2.5rem] font-bold leading-[2.5rem]">800M</h3>
        <span>Enrollments</span>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[2.5rem] font-bold leading-[2.5rem]">180+</h3>
        <span>Countries</span>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[2.5rem] font-bold leading-[2.5rem]">13,400+</h3>
        <span>Enterprise Customers</span>
      </div>
    </div>
  );
};
