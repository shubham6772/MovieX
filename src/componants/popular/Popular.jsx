import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousal from '../carousal/Carousal';

const Popular = () => {
    const [endpoint, setEndpoint] = useState('movie');

    const onTabChange = (tab) => {
        setEndpoint(tab ===  'Movies' ? 'movie' : 'tv');
    }

    const {data, loading} = useFetch(`/${endpoint}/popular`);

  return (
    <div className="carousalSection">
      <ContentWrapper>
      <span className="carousalTitle">What's Popular</span>
      <SwitchTabs data={['Movies', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>

    <Carousal endpoint={endpoint} data={data?.results} loading={loading}/>
    </div>
  );
}; 

export default Popular;
