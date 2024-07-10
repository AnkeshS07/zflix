import Image from 'next/image';
import React from 'react';

export default function ShapeBackground() {
  return (
    <>
    <div className="lg:flex hidden flex-col absolute bottom-0 z-0">
        <Image
          src={"./images/bottom-shape.svg"}
          alt={"bottom-shape"}
          width={2560}
          height={300}
          sizes="100vw"
          style={{
            width: "2560px",
            height: "auto"
          }}
        />
      </div>
    <div className="lg:hidden block flex-col absolute bottom-0 z-0">
        <Image
          src={"./images/mobile-bg-shape.svg"}
          alt={"bottom-shape"}
          width={2560}
          height={300}
          sizes="100vw"
          style={{
            width: "2560px",
            height: "auto"
          }}
        />
      </div>
    </>
  )
}