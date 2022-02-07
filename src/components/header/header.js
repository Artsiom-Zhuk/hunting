import { Link as RouterLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import classNames from "classnames";

import {
  HEADER_CONTACTS,
  HEADER_LINKS,
  PAGE_NAMES_BY_PATHNAME,
} from "../../constants";

import "./header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box className="header-container">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" gap="10px">
          {HEADER_LINKS.map((link) => (
            <RouterLink
              to={link.path}
              key={link.path}
              className={classNames("header-link", {
                "header-link--active": pathname === link.path,
              })}
            >
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
      <Typography className="header-page_name">
        {PAGE_NAMES_BY_PATHNAME[pathname]}
      </Typography>
      <Typography className="header-title">Охота на гуся</Typography>
      <Typography className="header-phone_number">
        Наш номер: +375 (33) 622-09-09
      </Typography>
      <Typography className="header-address">Наш адрес: г. Гомель</Typography>
    </Box>
  );
};

export default Header;
