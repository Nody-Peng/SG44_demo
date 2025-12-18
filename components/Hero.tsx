import React from "react";
import { Calendar, MapPin, FileText } from "lucide-react";
import { CONFERENCE_INFO } from "../constants";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="#5F7161"
                strokeWidth="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path
            d="M0 80 Q 25 70 50 85 T 100 80"
            fill="none"
            stroke="#869D85"
            strokeWidth="0.2"
          />
          <path
            d="M0 85 Q 25 75 50 90 T 100 85"
            fill="none"
            stroke="#869D85"
            strokeWidth="0.2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
          <span className="block text-[#5F7161]">
            {CONFERENCE_INFO.theme.split(" X ")[0]}
          </span>
          <span className="block mt-2">
            {CONFERENCE_INFO.theme.split(" X ")[1]}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-stone-500 font-light tracking-wide max-w-3xl mx-auto">
          {CONFERENCE_INFO.themeEn}
        </p>

        {/* Info Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 text-stone-600">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F0F4F1] rounded-full">
              <Calendar className="w-5 h-5 text-[#5F7161]" />
            </div>
            <span className="font-semibold">{CONFERENCE_INFO.date}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F0F4F1] rounded-full">
              <MapPin className="w-5 h-5 text-[#5F7161]" />
            </div>
            <span className="font-semibold">{CONFERENCE_INFO.location}</span>
          </div>
        </div>

        {/* CTA Button - 籌備會報名 */}
        <div className="mt-12">
          <a
            href="https://forms.gle/b5ZzPh7sxNj1S5G67"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5F7161] text-white px-10 py-4 rounded-lg shadow-lg hover:bg-[#4a584b] hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold text-base md:text-lg group"
          >
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>點此報名第一次籌備會議</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <p className="mt-4 text-sm text-stone-500">
            報名截止：114/12/26 (五) 中午 12:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
