"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";

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

  // bottomsheet
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* 네이버 지도 API Script 로딩 */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setIsMapScriptLoaded(true)}
      />
      <div>
        <div ref={mapContainerRef} id="map" className="w-full h-screen"></div>
        <div className="fixed bottom-0 z-50 bg-white w-full h-20">
          <div className="px-4 pt-4 text-black">Safehood</div>
          <Modal
            isOpen={isOpen}
            placement={"bottom"}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Safehood
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
