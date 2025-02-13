"use client";

import Image from "next/image";

export default function Logos() {
  return (
    <div className="flex flex-col gap-[30px] md:flex-row md:gap-[0px] justify-around items-center container mx-auto px-[20px] py-[40px]">
      <div>
        <Image
          src="/Logo-1.png"
          alt="CapnoTrainer GO Device"
          className="w-[200px] h-[auto]"
          width={100}
          height={100}
        />
      </div>
      <div class="">
        <Image
          src="/Logo-2.png"
          alt="CapnoTrainer GO Device"
          className=""
          width={100}
          height={100}
        />
      </div>
      <div class="">
        <Image
          src="/Logo-3.png"
          alt="CapnoTrainer GO Device"
          className=""
          width={150}
          height={100}
        />
      </div>
      <div class="">
        <Image
          src="/Logo-4.png"
          alt="CapnoTrainer GO Device"
          className=""
          width={150}
          height={100}
        />
      </div>
    </div>
  );
}
