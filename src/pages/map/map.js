import { useLocation } from "react-router-dom";

import Container from "../../components/container";
import Title from "../../components/title";
import { PAGE_NAMES_BY_PATHNAME } from "../../constants";

const Map = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Title>{PAGE_NAMES_BY_PATHNAME[pathname]}</Title>
      <iframe
        src="https://yandex.by/map-widget/v1/-/CCU5qDV6wB"
        width="100%"
        height="500"
        allowFullScreen
        title="map"
        style={{ border: "1px solid black" }}
      />
    </Container>
  );
};

export default Map;
