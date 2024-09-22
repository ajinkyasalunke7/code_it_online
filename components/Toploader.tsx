import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#e60e0e"
        initialPosition={0.08}
        crawlSpeed={100}
        height={4}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #e60e0e,0 0 5px #e60e0e"
      />
    </>
  );
}
