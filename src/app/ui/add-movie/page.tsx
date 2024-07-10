import Image from "next/image";

import { Metadata } from "next";
import PrimaryButton from "@/app/components/common/primaryBtn";

export const metadata: Metadata = {
  title: "Add New Movie"
};

export default function AddNewMovie() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#093545]">    
      <div>
        <h1 className="text-[48px] font-semibold leading-[56px] text-white">Your movie list is empty</h1>
        <PrimaryButton title="Add a new movie" />
      </div>    
      <div style={{ display: "flex", flexDirection: "column" }}>
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
    </main>
  );
}
