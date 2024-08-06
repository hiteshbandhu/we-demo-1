"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuresData.featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex justify-center items-center"            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
