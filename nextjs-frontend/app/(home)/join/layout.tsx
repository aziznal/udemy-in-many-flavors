import { ReactNode } from "react";

export default function JoinLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-[350px] flex-col items-center justify-center text-center gap-2 py-12 [&>*]:w-full">
      {children}
    </div>
  );
}
