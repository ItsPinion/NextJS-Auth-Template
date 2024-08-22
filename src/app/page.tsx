"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useUser();
  const router = useRouter();


  if (!user.isSignedIn) {
    typeof user.isSignedIn !== "undefined" && router.push("/signin");

    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex scale-150 flex-col items-center justify-center gap-4">
        <h1>Hello {user.user.fullName ?? user.user.username ?? ""}</h1>
        <UserButton />
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
        <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
      </div>
    </div>
  );
}
