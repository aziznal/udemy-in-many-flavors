import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingSpinner from "@/components/ui/loading-spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function Page_Courses() {
  return (
    <>
      <h1 className="font-serif text-4xl font-bold">Courses</h1>

      <div className="mt-8 flex h-[48px] justify-between">
        <div className="flex gap-8">
          <div className="flex">
            <Input
              placeholder="Search your courses"
              className="h-full w-[200px] !font-normal !placeholder-zinc-400"
            />

            <Button
              variant="icon"
              className="h-full w-[48px] bg-zinc-900 text-white"
            >
              <span className="material-icons">search</span>
            </Button>
          </div>

          <Select defaultValue="newest">
            <SelectTrigger className="h-full w-fit" value="newest">
              <span className="font-bold">
                <SelectValue placeholder="Sort By" />
              </span>
            </SelectTrigger>

            <SelectContent className="w-[200px]">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="A-Z">A-Z</SelectItem>
              <SelectItem value="Z-A">Z-A</SelectItem>
              <SelectItem value="published">Published first</SelectItem>
              <SelectItem value="unpublished">Unpublished first</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="primary" className="h-full">
          New Course
        </Button>
      </div>

      <div className="mt-16 flex items-center justify-center">
        <LoadingSpinner size={72} />
      </div>

      <div className="my-20 flex justify-center">
        Based on your experience, we think these resources will be helpful.
      </div>

      <div className="grid gap-4 ">
        <div className="col-span-2 flex items-center justify-center gap-28 border border-zinc-300 pb-4 pl-32 pr-12 pt-6 shadow-lg shadow-zinc-300">
          <Image
            src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
            width={200}
            height={300}
            alt="Engaging Course"
          />

          <div className="flex flex-col space-y-8">
            <h2 className="text-xl">Create an Engaging Course</h2>

            <p className="w-3/4 text-sm">
              {`Whether you've been teaching for years or are teaching for the
              first time, you can make an engaging course. We've compiled
              resources and best practices to help you get to the next level, no
              matter where you're starting.`}
            </p>

            <Link
              className="cursor-pointer text-sm text-violet-600 underline underline-offset-4"
              href="/"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 border border-zinc-300 px-6 pb-2 pt-6 shadow-lg shadow-zinc-300">
          <Image
            src="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
            width={200}
            height={300}
            alt="Engaging Course"
          />

          <div className="flex flex-col space-y-8">
            <h2 className="text-lg">Get Started with Video</h2>

            <p className="text-sm">
              {`Quality video lectures can set your course apart. Use our resources to learn the basics.`}
            </p>

            <Link
              className="cursor-pointer text-sm text-violet-600 underline underline-offset-4"
              href="/"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 border border-zinc-300 px-6 pb-2 pt-6 shadow-lg shadow-zinc-300">
          <Image
            src="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg"
            width={200}
            height={300}
            alt="Engaging Course"
          />

          <div className="flex flex-col space-y-8">
            <h2 className="text-lg">Build Your Audience</h2>

            <p className="text-sm">
              {`Set your course up for success by building your audience.`}
            </p>

            <Link
              className="cursor-pointer text-sm text-violet-600 underline underline-offset-4"
              href="/"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center gap-28 border border-zinc-300 pb-4 pl-32 pr-12 pt-6 shadow-lg shadow-zinc-300">
          <Image
            src="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
            width={200}
            height={300}
            alt="Engaging Course"
          />

          <div className="flex flex-col space-y-8">
            <h2 className="text-xl">Join the New Instructor Challenge!</h2>

            <p className="w-3/4 text-sm">
              {`Get exclusive tips and resources designed to help you launch your
              first course faster! Eligible instructors who publish their first
              course on time will receive a special bonus to celebrate. Start
              today!`}
            </p>

            <Link
              className="cursor-pointer text-sm text-violet-600 underline underline-offset-4"
              href="/"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="my-20 flex justify-center text-sm">
        Have questions? Here are our most popular instructor resources.
      </div>

      <div className="flex items-start justify-center gap-6">
        <div className="flex w-[210px] flex-col items-center justify-center gap-2 text-center">
          <span className="material-icons !text-5xl ">ondemand_video</span>

          <Link
            className="font-bold text-violet-600 underline underline-offset-4"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
          >
            Test Video
          </Link>

          <p className="mt-5 text-sm">
            Send us a sample video and get expert feedback
          </p>
        </div>

        <div className="flex w-[210px] flex-col items-center justify-center gap-2 text-center">
          <span className="material-icons !text-5xl ">forum</span>

          <Link
            className="font-bold text-violet-600 underline underline-offset-4"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
          >
            Instructor Community
          </Link>

          <p className="mt-5 text-sm">
            Connect with experienced instructors. Ask questions, browse
            discussions, and more.
          </p>
        </div>

        <div className="flex w-[210px] flex-col items-center justify-center gap-2 text-center">
          <span className="material-icons !text-5xl ">school</span>

          <Link
            className="font-bold text-violet-600 underline underline-offset-4"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
          >
            Teaching Center
          </Link>

          <p className="mt-5 text-sm">
            Learn about best practices for teaching on Dontsueme
          </p>
        </div>

        <div className="flex w-[210px] flex-col items-center justify-center gap-2 text-center">
          <span className="material-icons !text-5xl ">auto_graph</span>

          <Link
            className="font-bold text-violet-600 underline underline-offset-4"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
          >
            Marketplace Insights
          </Link>

          <p className="mt-5 text-sm">
            Validate your course topic by exploring our marketplace supply and
            demand.
          </p>
        </div>

        <div className="flex w-[210px] flex-col items-center justify-center gap-2 text-center">
          <span className="material-icons !text-5xl ">help_center</span>

          <Link
            className="font-bold text-violet-600 underline underline-offset-4"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
          >
            Help and Support
          </Link>

          <p className="mt-5 text-sm">Browse our Help Center or contact our support team</p>
        </div>
      </div>

      {/* spacer */}
      <div className="pb-52"></div>
    </>
  );
}
