// "use client";

// import { useEffect, useRef } from "react";

// export default function NaverMap() {
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mapRef.current || typeof window === "undefined" || !window.naver)
//       return;

//     const map = new window.naver.maps.Map(mapRef.current, {
//       center: new window.naver.maps.LatLng(37.5665, 126.978),
//       zoom: 12,
//     });

//     new window.naver.maps.Marker({
//       position: new window.naver.maps.LatLng(37.5665, 126.978),
//       map,
//     });
//   }, []);

//   return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
// }
