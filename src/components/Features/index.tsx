"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Marquee from "react-fast-marquee"; // Import the library

const Features = () => {
  const [featuresData, setFeaturesData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from homepage.json
    fetch("/data/homepage.json")
      .then((response) => response.json())
      .then((data) => {
        setFeaturesData(data.features);
      })
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  if (!featuresData) {
    return (
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <p>Loading features...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle={featuresData.section.subtitle}
          title={featuresData.section.title}
          paragraph={featuresData.section.paragraph}
        />

        <div className="relative">
          <Marquee
            gradient={false} // Disables the gradient effect on the edges
            speed={50} // Adjust the speed of the marquee
          >
            {featuresData.featuresData.map((feature) => (
              <div
                key={feature.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Features;
