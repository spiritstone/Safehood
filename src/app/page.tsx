"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function Home() {
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMapScriptLoaded, setIsMapScriptLoaded] = useState(false);

  // splash 리디렉션
  useEffect(() => {
    if (typeof window !== "undefined" && !sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "true");
      router.replace("/splash");
    }
  }, [router]);

  // 지도 초기화
  useEffect(() => {
    if (
      isMapScriptLoaded &&
      typeof window !== "undefined" &&
      window.naver &&
      mapContainerRef.current
    ) {
      new window.naver.maps.Map(mapContainerRef.current, {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 16,
      });
    }
  }, [isMapScriptLoaded]);

  return (
    <>
      {/* 네이버 지도 API Script 로딩 */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setIsMapScriptLoaded(true)}
      />
      <div ref={mapContainerRef} id="map" className="w-full h-screen" />
    </>
  );
}
