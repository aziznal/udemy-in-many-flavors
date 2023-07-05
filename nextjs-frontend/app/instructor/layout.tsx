import Footer from "@/components/Footer";
import InstructorSidenav from "@/components/instructor-sidenav/instructor-sidenav";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout_Instructor({ children }: PropsWithChildren) {
  return (
    <div className="relative z-[2] flex min-h-full flex-col items-center justify-center">
      <div className="w-full flex-1 ">
        <InstructorSidenav className="fixed left-0 top-0 z-[2] h-full shrink-0" />

        <div className="z-[1] flex flex-1 flex-col">
          <header className="flex items-center justify-end gap-5 px-7 py-4 text-sm">
            <Link href="/">Student</Link>

            <span className="material-icons-outlined">notifications</span>

            <span className="material-icons-outlined !text-4xl">
              account_circle
            </span>
          </header>

          <main className="ml-64 mr-60 mt-2 flex flex-col">{children}</main>
        </div>
      </div>

      <Footer className="z-[3]" />
    </div>
  );
}
