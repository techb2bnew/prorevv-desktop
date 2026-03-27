'use client';
import { useState } from 'react';

const TabSliderSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Dashboard", image: "/dashboard-phone.png" },
    { id: 2, title: "Jobs", image: "/job-phone.png" },
    { id: 3, title: "VIN List", image: "/vpn-list-phone.png" },
    { id: 4, title: "Invoices", image: "/invoice-phone.png" },
    { id: 5, title: "Reports", image: "/report-phone.png" },
  ];

  const activeImage = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="bg-gray-100 py-16 text-center">

      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">
        Designed Specifically for Hail Repair Professionals
      </h2>

      {/* Tabs */}
      <div className="inline-flex bg-red-600 rounded-full p-1 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm rounded-full transition-all
              ${activeTab === tab.id
                ? "bg-white text-black"
                : "text-white"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Center Image Only */}
      <div className="flex justify-center items-center">
        <img
          key={activeImage.id}
          src={activeImage.image}
          alt={activeImage.title}
          className="h-[480px] transition-all duration-500 ease-in-out scale-100"
        />
      </div>

    </div>
  );
};
export default TabSliderSection;