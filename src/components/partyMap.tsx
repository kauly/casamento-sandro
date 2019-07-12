import * as React from "react";
import ReactMapGL, { ViewportProps } from "react-map-gl";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin-top: 10px;
`;

const initial = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
};

interface IPartyMap {
  dir: string;
}

function PartyMap(props: IPartyMap) {
  const [viewPort, setViewPort] = React.useState(initial);
  return (
    <Container dir={props.dir}>
      <ReactMapGL
        {...viewPort}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(v: ViewportProps) => setViewPort(v)}
        mapboxApiAccessToken="pk.eyJ1Ijoia2F1bHkiLCJhIjoiY2pwYmlwMTF0MHdubzNrcGQyMXVucjlzeCJ9.2vo8QG1szbJ8qh5Ac3fftQ"
      />
    </Container>
  );
}

export default PartyMap;
