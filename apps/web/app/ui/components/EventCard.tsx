import Image from "next/image";

export interface EventCardProps {
  name: string;
  img: string;
  isActive: boolean;
}

export default function EventCard({ name, img, isActive }: EventCardProps) {
  return (
    <div
      className={`flex flex-col rounded-sm shadow-md shadow-gray-600 transition-transform duration-300 sm:w-[750px] w-[350px] ${
        isActive ? "scale-95 shadow-lg" : ""
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          className="object-cover rounded-b-lg"
          src={`/${img}`}
          alt={`Image of ${name}`}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 80vw,
                 90vw"
        />
      </div>
      <div className="text-white text-lg text-center p-2 font-[Satoshi Variable] sm:text-3xl">
        {name}
      </div>
    </div>
  );
}