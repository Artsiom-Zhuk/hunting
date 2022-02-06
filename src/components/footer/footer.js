import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./footer.css";

export const Footer = () => (
  <Stack gap="15px" className="footer-container">
    <Box>
      <Typography>
        Учреждение «Гомельская областная организационная структура» РГОО
        «Белорусское общество охотников и рыболовов»
      </Typography>

      <Typography>УНП 400012411​</Typography>
    </Box>

    <Typography>&copy; 2022-2023</Typography>
  </Stack>
);

export default Footer;
