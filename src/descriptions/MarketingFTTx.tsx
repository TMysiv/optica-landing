import { Container, Typography, List, ListItem, Divider } from "@mui/material";
import { ReactElement } from 'react';

export const MarketingFTTx = (): ReactElement => {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Маркетингова акція «Ціна – не новина»
      </Typography>

      <Typography variant="body1" gutterBottom>
        Учасники акції мають можливість замовити та підключити послугу
        «Оптичний Інтернет» (FTTx) зі швидкістю до 1000 Мбіт/с за акційною ціною
        з поступовим переходом на регулярний тариф.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Умови тарифікації:
      </Typography>

      <List>
        <ListItem>
          — з 1 по 12 місяць — <strong>99 грн/міс</strong>
        </ListItem>
        <ListItem>
          — з 13 по 24 місяць — <strong>200 грн/міс</strong>
        </ListItem>
        <ListItem>
          — з 25 місяця — тарифікація на стандартних умовах відповідно до обраного тарифного плану.
        </ListItem>
      </List>

      <Typography variant="body1" gutterBottom>
        В акції беруть участь тарифні плани зі швидкістю до 1000 Мбіт/с:
        «Активний 1 Гбіт/с», «Простий 1 Гбіт/с», «Класичний 1 Гбіт/с»,
        «Промо 1 Гбіт/с», «Вільний 1 Гбіт/с», «Вигідний 1000 Мбіт/с»,
        «Базовий 1 Гбіт/с», «Гігабітний Промо», «Оптимальний 1 Гбіт/с».
      </Typography>

      <Typography variant="body1" gutterBottom>
        У межах акції доступне підключення «Оптичного Інтернету» (FTTH)
        зі швидкістю до 1000 Мбіт/с (за наявності технічної можливості).
      </Typography>

      <Typography variant="body1" gutterBottom>
        Максимальна швидкість передавання та приймання — до 1 024 000 Кбіт/с,
        середня — 512 000 Кбіт/с, мінімальна — 64 Кбіт/с на порті оптичного
        терміналу (ONU). Фактична швидкість залежить від технічних параметрів
        лінії та обраного тарифного плану.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Акція не сумісна з іншими спеціальними або акційними пропозиціями,
        що передбачають зниження вартості послуг. Діє в обмеженій кількості
        населених пунктів.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Участь доступна лише для фізичних осіб, які не користувалися
        послугою протягом останніх 90 днів.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Період проведення акції — з 01.09.2024 до 31.12.2026.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Замовити послугу та отримати детальну інформацію можна за телефоном
        Контакт-центру:
        <br />
        <strong>+380 4444 00000</strong>
        <br />
        (дзвінки безкоштовні з номерів Укртелеком або згідно з тарифами вашого оператора).
      </Typography>

      <Typography variant="body1" gutterBottom>
        Вартість підключення залежить від технічної можливості та становить
        не менше акційної вартості підключення, що діє в населеному пункті.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Тарифи та ціни вказані у гривнях з ПДВ. Умови актуальні станом на 01.01.2026.
      </Typography>

      <Typography variant="body1">
        Послуга надається АТ «Укртелеком», бул. Тараса Шевченка, 18,
        м. Київ, 01601, за наявності технічної можливості.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Оренда обладнання:
      </Typography>

      <List>
        <ListItem>
          — оптичний термінал (ONU) — 1 грн/міс за умови користування послугою FTTH.
        </ListItem>
      </List>

      <Typography variant="body1" gutterBottom>
        Енергонезалежність послуги забезпечується резервним живленням
        обладнання Інтернет-доступу під час відключень електроенергії.
        Тривалість резервного живлення залежить від адреси підключення.
        Абонентське обладнання (модем, роутер тощо) забезпечується резервним
        живленням абонентом самостійно.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Спеціальна пропозиція — хмарний геймінг
      </Typography>

      <Typography variant="body1" gutterBottom>
        Ексклюзивна знижка 50% на перший місяць користування послугою
        хмарного геймінгу Boosteroid для нових та діючих користувачів
        (фізичних осіб) послуги Інтернет від АТ «Укртелеком».
      </Typography>

      <Typography variant="body1" gutterBottom>
        Послуги хмарного геймінгу надає ТОВ «Адвансед Клауд Технолоджіс».
        Оплата здійснюється на рахунок цього товариства.
      </Typography>

      <Typography variant="body1">
        Промокод можна сформувати до 31.12.2026 та використати один раз.
        Умови користування та вартість — на сайті boosteroid.com.
      </Typography>
    </Container>  )
}
