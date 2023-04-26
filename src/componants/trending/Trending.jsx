import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousal from '../carousal/Carousal';

const Trending = () => {
    const [endpoint, setEndpoint] = useState('day');

    const onTabChange = (tab) => {
        setEndpoint(tab ===  'Day' ? 'day' : 'week');
    }

    const {data, loading} = useFetch(`/trending/movie/${endpoint}`);

  return (
    <div className="carousalSection">
      <ContentWrapper>
      <span className="carousalTitle">Trending</span>
      <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>

    <Carousal data={data?.results} loading={loading}/>
    </div>
  );
}; 

export default Trending;
