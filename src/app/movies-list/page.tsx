import Image from "next/image";
import ShapeBackground from "../components/common/backgroundShape";
import MoviesList from "../components/movies";

export default function MovieList() {
  return (
    <main className="bg-[#093545] lg:px-0 px-6">
      <div className="max-w-screen-xl mx-auto pb-[120px]">
        <div className="flex justify-between items-center lg:py-[120px] py-20">
          <div className="flex items-center z-[1] gap-3">
            <h2 className="lg:text-[48px] text-[32px] font-semibold lg:leading-[56px] leading-[40px] text-white">
              My movies
            </h2>
            <Image
              src="./images/add-plus-icon.svg"
              alt="add-plus-icon"
              width={32}
              height={32}
            />
          </div>
          <button className="text-base text-white font-bold leading-6 flex justify-between items-center gap-3">
            <span className="lg:block hidden">Logout{" "}</span>
            <Image
              src="./images/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
          </button>
        </div>
        <MoviesList />
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
