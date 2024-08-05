"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/homepage.json");
        const result = await response.json();
        setData(result.pricing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle={data.subtitle}
            title={data.title}
            paragraph={data.paragraph}
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {data.pricingData.map((product) => (
            <PricingBox key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
