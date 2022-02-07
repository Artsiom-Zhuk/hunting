import { useLocation } from "react-router-dom";
import ResponsiveGallery from "react-responsive-gallery";

import Container from "../../components/container";
import Title from "../../components/title";
import { GALLERY_IMAGES, PAGE_NAMES_BY_PATHNAME } from "../../constants";

const Gallery = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Title>{PAGE_NAMES_BY_PATHNAME[pathname]}</Title>
      <ResponsiveGallery images={GALLERY_IMAGES} />
    </Container>
  );
};

export default Gallery;
