import Image from "next/image";
import CreateEditForm from "../components/common/createEditForm";

export default function CreateMovie() {
  return (
    <main className="bg-[#093545] lg:px-0 px-6">
      <div className="max-w-screen-xl mx-auto pb-[120px]">
        <div className="lg:py-[120px] py-20">
          <h2 className="lg:text-[48px] text-[32px] font-semibold lg:leading-[56px] leading-[40px] text-white text-left">
            Create a new movie
          </h2>
        </div>
        <CreateEditForm />
      </div>
      <div className="flex flex-col">
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
