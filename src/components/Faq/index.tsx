"use client"
import { useState, useEffect } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [faqData, setFaqData] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch('/data/homepage.json');
        const data = await response.json();
        setFaqData(data.FAQ);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFaqData();
  }, []);

  if (!faqData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle={faqData.sectionTitle.subtitle}
          title={faqData.sectionTitle.title}
          paragraph={faqData.sectionTitle.paragraph}
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            {faqData.faq.slice(0, 3).map((item, index) => (
              <SingleFaq
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          <div className="w-full px-4 lg:w-1/2">
            {faqData.faq.slice(3).map((item, index) => (
              <SingleFaq
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Faq;
