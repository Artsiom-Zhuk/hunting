import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { HEADER_CONTACTS, HEADER_LINKS } from "../../constants";

import "./header.css";

export const Header = () => (
  <Box className="header-container">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" gap="10px">
        {HEADER_LINKS.map((link) => (
          <RouterLink to={link.path} key={link.path} className="header-link">
            {link.icon}
          </RouterLink>
        ))}
      </Stack>

      <Stack direction="row" gap="10px" className="header-contacts">
        {HEADER_CONTACTS.map((contact) => (
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
