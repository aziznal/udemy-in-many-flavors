import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

      <div className="my-20 flex justify-center">
        <span>
          Based on your experience, we think these resources will be helpful.
        </span>
      </div>

      <div></div>
    </>
  );
}
