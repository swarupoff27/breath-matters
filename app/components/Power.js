"use client";

import Image from "next/image";
import Link from "next/link";

export default function Power() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center container mx-auto px-[20px] py-[40px]">
      <div className="">
        <h2 className="text-2xl font-bold leading-tight text-[#000000] sm:text-4xl lg:text-4xl mb-[24px]">
          DISCOVER THE HIDDEN POWER OF YOUR BREATH
        </h2>
      </div>
      <div className="flex flex-col md:flex-row max-w-[1200px] w-[100%] mx-auto  ">
        <div className=" flex justify-center w-[100%] md:w-[30%]  ">
          <Image
            src="/girl-breathing.png"
            alt="CapnoTrainer GO Device"
            className="max-w-[356px] w-[100%] h-[auto]"
            width={356}
            height={264}
          />
        </div>

        <div className="w-[100%] md:w-[70%] bg-[#e6f2f2] ">
          <div className="mb-[40px] px-[20px] pt-[20px] md:px-[60px] md:pt-[40px]">
            <p className="text-[#000000]">
              Your breathing isn&apos;t just about oxygen in and carbon dioxide
              out-it&apos;s a complex behavior shaped by triggers, habits, and
              physiology. When misaligned, these habits can:
            </p>
          </div>
          <div className="flex flex-col gap-[24px] px-[20px] md:px-[60px] mb-[40px]  md:mb-[40px]">
            <div className="flex gap-[24px]">
              <div className="max-w-[47px] w-[100%] h-[auto]">
                <Image
                  src="/power-1.png"
                  alt="CapnoTrainer GO Device"
                  className="max-w-[47px] w-[100%] h-[auto]"
                  width={47}
                  height={49}
                />
              </div>
              <div className="flex-1">
                <p className="text-[#000000] font-bold">
                  Compromise your health:
                </p>
                <p className="text-[#000000]">
                  Triggering anxiety, fatigue, and physical discomfort.
                </p>
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div className="max-w-[47px] w-[100%] h-[auto]">
                <Image
                  src="/power-2.png"
                  alt="CapnoTrainer GO Device"
                  className="max-w-[46px] w-[100%] h-[auto]"
                  width={46}
                  height={48}
                />
              </div>
              <div className="">
                <p className="text-[#000000] font-bold">
                  Disrupt your performance:
                </p>
                <p className="text-[#000000]">
                  Causing focus deficits, memory issues, and suboptimal
                  endurance.
                </p>
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div className="max-w-[47px] w-[100%] h-[auto]">
                <Image
                  src="/power-3.png"
                  alt="CapnoTrainer GO Device"
                  className="max-w-[49px] w-[100%] h-[auto]"
                  width={49}
                  height={48}
                />
              </div>
              <div className="">
                <p className="text-[#000000] font-bold">
                  Exacerbate existing conditions:
                </p>
                <p className="text-[#000000]">
                  Like asthma, chronic pain, and even stress-related disorders.
                </p>
              </div>
            </div>
          </div>

          <div class="text-[#ffffff] bg-teal-800 px-[20px] md:px-[60px] py-[24px] text-[14px]">
            Millions of people suffer the consequences of poor breathing habits.
            But you don&apos;t have to be one of them. With the CapnoTrainer®
            GO, you&apos;ll unlock a scientifically-backed pathway to breathing
            mastery.
          </div>
        </div>
      </div>
    </div>
  );
}
