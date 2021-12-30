import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { ReactComponent as LocationImage } from "../../images/location.svg";

import { ROUTER_PATHS, CONTACTS } from "../../constants";

import "./header.css";

export const Header = () => (
  <Box className="header-container">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <RouterLink to={ROUTER_PATHS.Example} className="header-location_link">
        <LocationImage className="header-location_link_img" />
        <Typography className="header-location_title">г. Гомель</Typography>
      </RouterLink>

      <Stack direction="row" gap="15px" className="header-contacts">
        {CONTACTS.map((contact) => (
          <Link key={contact.href} href={contact.href} target="_blank">
            {contact.img}
          </Link>
        ))}
      </Stack>
    </Stack>

    <Typography className="header-title">Охота на гуся</Typography>

    <Typography className="header-phone_number">
      Наш номер: +375 (33) 622-09-09
    </Typography>
  </Box>
);

export default Header;
