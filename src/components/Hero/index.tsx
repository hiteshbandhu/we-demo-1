"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/homepage.json')
      .then(response => response.json())
      .then(data => setData(data.hero));
  }, []);

  if (!data) return null;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                {data.headline}
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-light text-white sm:text-lg sm:leading-[1.44]">
                {data.subHeadline}
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                {data.cta.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      target={item.text === "Star on Github" ? "_blank" : undefined}
                      className={item.className}
                    >
                      {item.icon && (
                        <svg
                          className="fill-current"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={item.icon.svg} />
                        </svg>
                      )}
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-6">
            <div
              className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
