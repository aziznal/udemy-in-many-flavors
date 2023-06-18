import { getServerSession } from "@/utils/get-server-session";
import { ReactNode } from "react";

import { redirect } from "next/navigation";

export default function JoinLayout({ children }: { children: ReactNode }) {
  const session = getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex w-[350px] flex-col items-center justify-center gap-2 py-12 text-center [&>*]:w-full">
      {children}
    </div>
  );
}
