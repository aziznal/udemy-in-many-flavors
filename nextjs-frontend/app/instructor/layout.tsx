import Footer from "@/components/Footer";
import InstructorSidenav from "@/components/instructor-sidenav/instructor-sidenav";
import { PropsWithChildren } from "react";

export default function Layout_Instructor({ children }: PropsWithChildren) {
  return (
    <div className="relative z-[2] flex min-h-full flex-col items-center justify-center">
      <div className="w-full flex-1 ">
        <InstructorSidenav className="fixed left-0 top-0 z-[2] h-full shrink-0" />

        <main className="z-[1] flex flex-1 flex-col">
          <header></header>

          <div className="ml-72 mr-60 flex flex-col items-center">
            {children}
          </div>
        </main>
      </div>

      <Footer className="z-[3]" />
    </div>
  );
}
