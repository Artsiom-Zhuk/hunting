import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResponsiveGallery from "react-responsive-gallery";

import { GALLERY_IMAGES } from "../../constants";

import "./gallery.css";

const Gallery = () => (
  <Box className="gallery-container">
    <Typography className="gallery-title">Фотогалерея</Typography>
    <ResponsiveGallery images={GALLERY_IMAGES} />
  </Box>
);

export default Gallery;
