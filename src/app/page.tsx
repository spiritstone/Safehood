"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "true");
      router.replace("/splash");
    }
  }, [router]);

  //지도를 삽입할 HTML 요소 또는 HTML 요소의 id를 지정합니다.
  var mapDiv = document.getElementById("map"); // 'map'으로 선언해도 동일

  //옵션 없이 지도 객체를 생성하면 서울 시청을 중심으로 하는 16 레벨의 지도가 생성됩니다.
  var map = new naver.maps.Map(mapDiv!);
  return (
    <div
      id="map"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/safehood_icon.png"
          alt="Safehood"
          width={180}
          height={180}
          priority
        />
      </main> */}
    </div>
  );
}
