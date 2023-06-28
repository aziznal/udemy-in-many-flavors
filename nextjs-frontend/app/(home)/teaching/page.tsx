import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

      <HowToBeginTabs />

      <Reviews />

      <YouWontHaveToDoItAlone />

      <GetStartedFooter />
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

const HowToBeginTabs = () => {
  return (
    <Tabs
      defaultValue="plan-your-curriculum"
      className="mt-12 flex flex-col items-center"
    >
      <TabsList>
        <TabsTrigger value="plan-your-curriculum">
          Plan your curriculum
        </TabsTrigger>

        <TabsTrigger value="record-your-video">Record your video</TabsTrigger>

        <TabsTrigger value="launch-your-course">Launch your course</TabsTrigger>
      </TabsList>

      <div className="mt-6 w-[850px] [&>*]:flex [&>*]:w-full [&>*]:items-center [&>*]:justify-between">
        <TabsContent value="plan-your-curriculum">
          <div className="flex flex-col gap-2 text-lg">
            <p>
              You start with your passion and knowledge. Then choose a promising
              topic with the help of our Marketplace Insights tool.
            </p>

            <p>The way that you teach — what you bring to it — is up to you.</p>

            <h2 className="mt-2 text-lg font-bold">How we help you</h2>

            <p>
              We offer plenty of resources on how to create your first course.
              And, our instructor dashboard and curriculum pages help keep you
              organized.
            </p>
          </div>

          <Image
            src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
            width={480}
            height={480}
            alt="image"
          />
        </TabsContent>

        <TabsContent value="record-your-video">
          <div className="flex flex-col gap-2 text-lg">
            <p>
              Use basic tools like a smartphone or a DSLR camera. Add a good
              microphone and you’re ready to start.
            </p>

            <p>
              If you don’t like being on camera, just capture your screen.
              Either way, we recommend two hours or more of video for a paid
              course.
            </p>

            <h2 className="mt-2 text-lg font-bold">How we help you</h2>

            <p>
              Our support team is available to help you throughout the process
              and provide feedback on test videos.
            </p>
          </div>

          <Image
            src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
            width={480}
            height={480}
            alt="image"
          />
        </TabsContent>

        <TabsContent value="launch-your-course">
          <div className="flex flex-col gap-2 text-lg">
            <p>
              Gather your first ratings and reviews by promoting your course
              through social media and your professional networks.
            </p>

            <p>
              Your course will be discoverable in our marketplace where you earn
              revenue from each paid enrollment.
            </p>

            <h2 className="mt-2 text-lg font-bold">How we help you</h2>

            <p>
              Our custom coupon tool lets you offer enrollment incentives while
              our global promotions drive traffic to courses. There’s even more
              opportunity for courses chosen for Udemy Business.
            </p>
          </div>

          <Image
            src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
            width={480}
            height={480}
            alt="image"
          />
        </TabsContent>
      </div>
    </Tabs>
  );
};

const Reviews = () => {
  return (
    <div className="flex w-full items-center justify-center bg-zinc-100">
      <div className="relative flex w-[850px] items-center justify-center gap-8">
        <Image
          src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg"
          width={400}
          height={400}
          alt="image"
        />

        <div>
          <p className="text-2xl leading-8">
            {`“I’m proud to wake up knowing my work is helping people around the
            world improve their careers and build great things. While being a
            full-time instructor is hard work, it lets you work when, where, and
            how you want.”`}
          </p>

          <span className="mt-4 block text-sm font-bold">Frank Kane</span>
          <span className="mt-2 block text-sm text-zinc-500">
            Data Science & IT Certifications
          </span>
        </div>

        <span className="absolute -right-14 flex h-12 w-12 -translate-y-3 cursor-pointer items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 text-white hover:bg-zinc-800">
          <span className="material-icons !text-[32px]">chevron_right</span>
        </span>
      </div>
    </div>
  );
};

const YouWontHaveToDoItAlone = () => {
  return (
    <div className="mt-32 flex w-full flex-wrap items-center justify-around">
      <Image
        src="https://s.udemycdn.com/teaching/support-1-v3.jpg"
        width={480}
        height={480}
        alt="image"
      />

      <div className="w-[600px] text-center">
        <h1 className="font-serif text-5xl font-bold">{`You won't have to do it alone`}</h1>

        <p className="mt-4 text-lg">
          Our <span className="font-bold">Instructor Support Team</span> is here
          to answer your questions and review your test video, while our
          <span className="font-bold">Teaching Center</span> gives you plenty of
          resources to help you through the process. Plus, get the support of
          experienced instructors in our{" "}
          <span className="font-bold">online community</span>.
        </p>

        <span className="mt-8 block font-bold text-violet-800 underline underline-offset-4">
          Need more details before you start? Learn more.
        </span>
      </div>

      <Image
        src="https://s.udemycdn.com/teaching/support-2-v3.jpg"
        width={480}
        height={480}
        alt="image"
      />
    </div>
  );
};

const GetStartedFooter = () => {
  return (
    <div className="mt-44 flex h-[380px] w-full items-center justify-center bg-zinc-100 text-center">
      <div className="flex w-[570px] flex-col items-center justify-center gap-4">
        <h1 className="font-serif text-5xl font-bold">
          Become an instructor today
        </h1>

        <p className="text-2xl">{`Join one of the world's largest online learning marketplaces`}</p>

        <Button className="w-[50%]">Get Started</Button>
      </div>
    </div>
  );
};
