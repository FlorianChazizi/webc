'use client';
import React, { useState } from "react";
import StarterPlan from "./PricingCards/StarterPlan";
import BusinessPlan from "./PricingCards/BusinessPlan";
import EshopPlan from "./PricingCards/EshopPlan";

const PricingSection = () => {
  const [selectedTab, setSelectedTab] = useState("websites");

  return (
    <section className="bg-transparent dark:bg-white" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight dark:text-black text-white">Πακέτα σχεδιασμένα για επιχειρήσεις</h2>
        </div>
        <div className="mb-6 text-center">
          <button
            onClick={() => setSelectedTab("websites")}
            className={`px-4 py-2 mx-2 font-semibold ${
              selectedTab === "websites" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            } rounded`}
          >
            Websites
          </button>
          <button
            onClick={() => setSelectedTab("eshop")}
            className={`px-4 py-2 mx-2 font-semibold ${
              selectedTab === "eshop" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            } rounded`}
          >
            E-shop
          </button>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {selectedTab === "websites" && (
            <>
              <StarterPlan />
              <BusinessPlan />
            </>
          )}
          {selectedTab === "eshop" && <EshopPlan />}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
