import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { SwitchTabs } from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabSwitch = (tab) => {
    setEndpoint(tab === "day" ? "day" : "week");
  };

  return (
    <div className="carousel_section">
      <ContentWrapper>
        <span className="crousel_title">Trending</span>
        <SwitchTabs onTabChange={onTabSwitch} data={["day", "week"]} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
