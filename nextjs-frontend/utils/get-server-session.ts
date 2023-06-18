import { cookies } from "next/headers";

export function getServerSession(): string | undefined {
  return cookies().get(process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME)?.value;
}
