import Image from "next/image";

import { Metadata } from "next";
import PrimaryButton from "@/app/components/common/primaryBtn";
import ShapeBackground from "../components/common/backgroundShape";

export const metadata: Metadata = {
  title: "Add New Movie"
};

export default function AddNewMovie() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#093545]">
      <div className="flex items-center flex-col m-auto lg:p-0 px-6">
        <h1 className="lg:text-[48px] text-[32px] font-semibold lg:leading-[56px] leading-[40px] text-white mb-10 text-center">
          Your movie list is empty
        </h1>
        <PrimaryButton title="Add a new movie" />
      </div>
      <ShapeBackground />
    </main>
  );
}
