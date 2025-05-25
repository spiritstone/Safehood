"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="flex flex-col"
    >
      <Image
        src="/safehood_icon.png"
        alt="Safehood"
        width={180}
        height={180}
        priority
      />
      <h1>Welcome to Safehood</h1>
    </div>
  );
}
