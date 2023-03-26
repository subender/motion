import React, { useState } from "react";
import "./style.scss";

export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switching_tabs">
      <div className="tabs_items">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tab_item  ${selectedTab === index ? "active" : ""}`}
            onClick={() => {
              activeTab(tab, index);
            }}
          >
            {tab}
          </span>
        ))}
        <span className="moving_bg" style={{ left }} />
      </div>
    </div>
  );
};
