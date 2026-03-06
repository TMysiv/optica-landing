import { Container, Divider, List, ListItem, Typography } from '@mui/material';
import { ReactElement } from 'react';

export const MaxDualOffer = (): ReactElement => {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Спеціальна пакетна пропозиція «Максимальний Дует»
      </Typography>

      <Typography variant="body1" gutterBottom>
        Нові користувачі АТ «Укртелеком» можуть одночасно підключити
        послуги «Оптичний Інтернет» (FTTx) та «MEGOGO TV»
        за спеціальною пакетною ціною.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Вартість пакета — 479 грн/міс (з ПДВ)
      </Typography>

      <List>
        <ListItem>
          — Оптичний Інтернет (FTTB 100 Мбіт/с або FTTH 1000 Мбіт/с) —
          30 грн/міс
        </ListItem>
        <ListItem>
          — «MEGOGO TV» (ТП «Максимальний бандл») —
          449 грн/міс
        </ListItem>
      </List>

      <Typography variant="body2" gutterBottom>
        Акційна ціна діє лише за умови одночасного користування
        двома послугами. Тарифи вказані у гривнях з ПДВ.
        Умови актуальні станом на 01.01.2026.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Період дії пропозиції
      </Typography>

      <Typography variant="body1" gutterBottom>
        Замовлення доступне з 01.10.2024 до 31.12.2027 включно.
        Граничний термін підключення — до 15.01.2028.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Параметри швидкості Інтернету
      </Typography>

      <Typography variant="body1" gutterBottom>
        <strong>FTTB (до 100 Мбіт/с):</strong><br />
        максимальна — 102 400 Кбіт/с;<br />
        середня — 51 200 Кбіт/с;<br />
        мінімальна — 64 Кбіт/с.
      </Typography>

      <Typography variant="body1" gutterBottom>
        <strong>FTTH (до 1000 Мбіт/с):</strong><br />
        максимальна — 1 024 000 Кбіт/с;<br />
        середня — 512 000 Кбіт/с;<br />
        мінімальна — 64 Кбіт/с.
      </Typography>

      <Typography variant="body2">
        Фактична швидкість залежить від технічних параметрів лінії
        та обраного тарифного плану.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Оренда обладнання
      </Typography>

      <List>
        <ListItem>
          — приставка MAG-255 — 1 грн/міс.
          (у разі неповернення протягом 30 днів після розірвання договору
          переходить у власність абонента за 1,67 грн без ПДВ)
        </ListItem>
        <ListItem>
          — роутер (WAN до 100 Мбіт/с) — 50 грн/міс
          для абонентів FTTB
        </ListItem>
        <ListItem>
          — оптичний термінал (ONU) — 1 грн/міс
          для абонентів FTTH
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Умови користування
      </Typography>

      <List>
        <ListItem>— мінімальна тарифікаційна одиниця — 1 доба</ListItem>
        <ListItem>— мінімальний строк користування — 15 днів</ListItem>
        <ListItem>
          — змінювати тариф можна не частіше 1 разу протягом 15 діб
        </ListItem>
        <ListItem>
          — «MEGOGO TV» доступна лише разом із «Оптичним Інтернетом» (FTTx)
        </ListItem>
        <ListItem>
          — у разі відключення однієї з послуг пакетна ціна не зберігається
        </ListItem>
      </List>

      <Typography variant="body2" gutterBottom>
        Підключення здійснюється за наявності технічної можливості.
        Вартість підключення — згідно з діючими тарифами.
      </Typography>

      <Typography variant="body2" gutterBottom>
        Учасник не може скористатися іншими акційними пропозиціями,
        окрім програми «Приведи друга».
      </Typography>

      <Typography variant="body2" gutterBottom>
        Пропозиція доступна для абонентів без заборгованості.
        АТ «Укртелеком» залишає за собою право змінювати
        вартість пакетної пропозиції.
      </Typography>

      <Typography variant="body2" gutterBottom>
        Територія дії — Україна (крім тимчасово окупованих територій
        та зон бойових дій).
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Контактна інформація
      </Typography>

      <Typography variant="body1">
        Контакт-центр: <strong>+380 4444 00000</strong><br />
        (дзвінки безкоштовні з номерів Укртелеком
        або згідно з тарифами вашого оператора)
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Послуга Інтернет надається АТ «Укртелеком»,
        м. Київ, бул. Тараса Шевченка, 18.
        Послуга «MEGOGO TV» надається ТОВ «МЕГОГО».
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2">
        Енергонезалежність забезпечується резервним живленням
        обладнання доступу до мережі. Абонентське обладнання
        (модем, роутер тощо) забезпечується резервним живленням самостійно.
      </Typography>
    </Container>
  )
}
