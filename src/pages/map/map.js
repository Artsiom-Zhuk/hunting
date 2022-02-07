import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./map.css";

const Map = () => (
  <Box className="map-container">
    <Typography className="map-title">Карта</Typography>
    <iframe
      src="https://yandex.by/map-widget/v1/-/CCU5qDV6wB"
      width="100%"
      height="500"
      allowFullScreen
      title="map"
      style={{ border: "1px solid black" }}
    />
  </Box>
);

export default Map;
