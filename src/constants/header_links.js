import { ReactComponent as LocationImage } from "../images/location.svg";
import { ReactComponent as HomeImage } from "../images/home.svg";
import { ReactComponent as GalleryImage } from "../images/gallery.svg";
import { ROUTER_PATHS } from "../constants";

export const HEADER_LINKS = [
  {
    path: ROUTER_PATHS.Map,
    icon: <LocationImage />,
  },
  {
    path: ROUTER_PATHS.Home,
    icon: <HomeImage />,
  },
  {
    path: ROUTER_PATHS.Gallery,
    icon: <GalleryImage />,
  },
];
