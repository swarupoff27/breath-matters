"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-400 to-teal-600">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 lg:p-6">
        <div className="text-2xl font-semibold text-teal-800">
          Breathe Matters
        </div>
        <Link
          href="/book"
          className="rounded-md bg-teal-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700"
        >
          Book Now
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid items-center gap-12">
          <div className="sspace-y-6">
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl mb-[60px]">
              TRANSFORM YOUR LIFE WITH THE REVOLUTIONARY <br />
              <span className="whitespace-nowrap">CapnoTrainer® GO</span>
            </h1>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl mb-[16px]">
              Breathe Smarter, Live Better
            </h2>
            <p className="max-w-[800px] w-[100%] text-[16px] text-white/90">
              Breathing is more than just an unconscious action—it&apos;s a
              foundation of health, performance, and emotional well-being. But
              what if your breathing habits are silently holding you back? Enter
              the CapnoTrainer® GO, the groundbreaking tool that merges science,
              psychology, and technology to revolutionize your breathing habits
              and transform your life.
            </p>
          </div>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-square">
              <Image
                src=""
                alt="CapnoTrainer GO Device"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute left-0 right-0 top-1/2 -z-10 opacity-20">
        <svg
          className="h-32 w-full"
          viewBox="0 0 1200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C200 20 400 80 600 50C800 20 1000 80 1200 50V100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
