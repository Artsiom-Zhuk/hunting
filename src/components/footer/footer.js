import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "./footer.css";

const Footer = () => (
  <Stack gap="20px" className="footer-container">
    <Stack gap="10px">
      <Typography>
        Учреждение «Гомельская областная организационная структура» РГОО
        «Белорусское общество охотников и рыболовов»
      </Typography>
      <Typography>УНП 400012411​</Typography>
    </Stack>
    <Typography>&copy; 2022-2023</Typography>
  </Stack>
);

export default Footer;
