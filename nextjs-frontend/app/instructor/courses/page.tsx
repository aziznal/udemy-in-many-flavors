import { Input } from "@/components/ui/input";

export default function Page_Courses() {
  return (
    <>
      <h1 className="font-serif text-4xl font-bold">Courses</h1>

      <div className="mt-8">
        <Input
          placeholder="Search your courses"
          className="w-[200px] !font-normal !placeholder-zinc-400"
        />
      </div>
    </>
  );
}
