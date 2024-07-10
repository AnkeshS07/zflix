import Image from "next/image";
import movies from "../lib/data";

export default function MoviesList() {
  return (
    <>
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
      {movies.map((item, index) => (
        <div className="bg-[#092C39] rounded-2xl lg:p-2" key={index}>
          <Image src={item.imgUrl} alt={item.title} width={500} height={400} sizes="100vw" className="lg:mb-4 w-full h-auto lg:rounded-2xl rounded-t-xl"/>          
          <div className="lg:px-2 p-3">
              <h2 className="text-xl font-medium leading-8 text-white mb-4">{item.title}</h2>
              <p className="text-sm font-normal leading-6 text-white">{item.releaseYear}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

