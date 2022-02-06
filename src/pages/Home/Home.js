import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import "./home.css";

const Home = () => (
  <Box className="home-container">
    <Stack className="home-info_seasons">
      <Typography className="home-info_season">
        <strong>Весенний сезон:</strong> с 14 марта по 10 мая
      </Typography>
      <Typography className="home-info_season">
        <strong>Осенний сезон:</strong> с 19 сентября по 13 декабря
      </Typography>
    </Stack>

    <Box className="home-info">
      <Stack gap="20px">
        <Typography className="home-info_title">ОСНОВНАЯ ИНФОРМАЦИЯ</Typography>
        <Box className="home-info_content">
          <Typography>
            <strong>
              Весенний сезон охоты на гуся с 14 марта по 10 мая 2021.{" "}
            </strong>
            Разрешена охота на гусей любого пола и возраста в светлое время
            суток. Охотится можно только из скрадка либо из засады с
            использованием маскировочного халата и только с подманиванием с
            помощью манка и подсадного гуся (гусей), и (или) профилей, и (или)
            чучел гуся. Для розыска и подачи добытой дичи допускается
            использование охотничьих собак: терьеры, таксы, легавые, спаниели,
            ретриверы, водные собаки.
          </Typography>
        </Box>
        <Box className="home-info_content">
          <Typography>
            <strong>
              Осенний сезон охоты на гуся продлится с 19 сентября по 13 декабря.{" "}
            </strong>
            Охотиться можно в светлое время суток из засады, с подманиванием, с
            подхода, с подъезда (маломерные суда без двигателя или с
            неработающим двигателем), в том числе с охотничьими собаками (кроме
            борзых, гончих).
          </Typography>
        </Box>
        <Box className="home-info_content">
          <Typography>
            Гуси — род водоплавающих птиц семейства утиных, отряда гусеобразных.
            Серый гусь — птица длиной до 70 — 90 см и весом около 2,1 — 4,5 кг,
            размах крыльев 147 — 180 см. Оперение серовато-бурое с волнистым
            рисунком на шее и брюхе. Имеет светлое окаймление перьев на спине.
            Клюв розоватый или оранжевый. Самец заметно крупнее самки.
          </Typography>
        </Box>
      </Stack>
      <Stack gap="20px">
        <Typography className="home-info_title">ЦЕНЫ</Typography>
        <Box className="home-price_content">
          <Typography sx={{ fontWeight: "bold" }}>Услуга:</Typography>
          <Typography>
            инфо инфо инфо инфо инфо инфо инфо инфо инфо инфо инфо инфо инфо
            инфо инфо инфо
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Цена:</Typography>
          <Typography>9000$</Typography>
        </Box>
      </Stack>
    </Box>
  </Box>
);

export default Home;
