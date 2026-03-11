import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Logo } from '../Logo/Logo';
import { navItems, socials } from '../../helpers';
import { SocialLink } from '../SocialLink/SocialLink';
import { EmailLink } from '../EmailLink/EmailLink';

export const Footer = () => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down(765));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      aria-label="Футер сайту Укртелеком"
      className="w-full mt-[60px]"
      sx={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Основний блок */}
      <Box className="max-w-[1170px] mx-auto px-[24px] py-[40px]">

        {isMob ? (
          /* ===== МОБІЛЬНА ВЕРСІЯ ===== */
          <Box className="flex flex-col gap-0">

            <Box className="flex justify-center mb-[28px]">
              <Logo/>
            </Box>

            {/* Телефон — головний акцент на мобільному */}
            <a
              href={process.env.REACT_APP_PHONE}
              className="no-underline flex flex-col items-center mb-[28px]"
              aria-label="Безкоштовний номер Укртелеком"
            >
              <Box
                className="w-full rounded-[16px] py-[18px] px-[20px] flex flex-col items-center gap-[4px]"
                sx={{
                  background: 'linear-gradient(135deg, rgba(0,179,220,0.15) 0%, rgba(0,179,220,0.05) 100%)',
                  border: '1px solid rgba(0,179,220,0.3)',
                }}
              >
                <span className="text-[#00B3DC] text-[26px] font-bold tracking-wide">
                  {process.env.REACT_APP_PHONE}
                </span>
              </Box>
            </a>

            {/* Навігація — горизонтальна сітка 2x2 */}
            <Box className="grid grid-cols-2 gap-[8px] mb-[28px]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="rounded-[10px] py-[12px] px-[16px] text-white/70 text-[14px] font-medium text-center transition-all duration-200 bg-transparent cursor-pointer"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </Box>

            {/* Соцмережі — горизонтально */}
            <Box className="flex justify-center gap-[16px] mb-[24px]">
              {socials.map(({ label, href }) => (
                <SocialLink key={href} label={label} href={href} className="text-white/50 text-[13px]" />
              ))}
            </Box>

            {/* Email */}
            <Box className="flex justify-center">
              <EmailLink className="text-white/40 text-[13px]" email={`${process.env.REACT_APP_EMAIL}`}/>
            </Box>

          </Box>
        ) : (
          /* ===== ДЕСКТОПНА ВЕРСІЯ ===== */
          <Box className="flex justify-between items-start">

            {/* Лого і опис */}
            <Box className="max-w-[280px]">

              <Logo/>

              <p className="text-white/50 text-[13px] leading-[1.6] m-0">
                Підключення оптичного інтернету GPON по всій Україні. Швидкість до 1 Гбіт/с. Енергонезалежна мережа до 96 годин.
              </p>
            </Box>

            {/* Навігація */}
            <Box>
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[1.5px] mb-[16px] m-0">
                Навігація
              </p>
              <Box className="flex flex-col gap-[10px]">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-white/60 hover:text-white text-[14px] text-left transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                  >
                    {item.label}
                  </button>
                ))}
              </Box>
            </Box>

            {/* Контакти */}
            <Box>
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[1.5px] mb-[16px] m-0">
                Контакти
              </p>
              <Box className="flex flex-col gap-[12px]">
                <a
                  href={process.env.REACT_APP_PHONE}
                  className="flex items-center gap-[10px] no-underline group"
                  aria-label="Безкоштовний номер Укртелеком"
                >
                  <span className="text-[#00B3DC] text-[20px] font-bold group-hover:text-white transition-colors duration-200">
                    {process.env.REACT_APP_PHONE}
                  </span>
                </a>
                <EmailLink className="text-white/40 text-[13px]" email={`${process.env.REACT_APP_EMAIL}`}/>
              </Box>
            </Box>

            {/* Соцмережі */}
            <Box>
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[1.5px] mb-[16px] m-0">
                Соцмережі
              </p>
              <Box className="flex flex-col gap-[10px]">
                {socials.map(({label, href}) => (
                  <SocialLink key={href} label={label} href={href} className="text-white/60 hover:text-[#00B3DC] text-[14px]" />
                ))}
              </Box>
            </Box>

          </Box>
        )}
      </Box>

      {/* SEO текстовий блок — органічний трафік */}
      <Box
        className="max-w-[1170px] mx-auto px-4 py-[32px]"
        sx={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <h2 className="text-white/30 text-[13px] font-semibold mb-[10px]">
          Підключити оптичний інтернет GPON від Укртелеком по всій Україні
        </h2>
        <p className="text-white/25 text-[12px] leading-[1.7] m-0">
          Укртелеком надає послуги підключення оптичного інтернету GPON зі швидкістю до 1 Гбіт/с у Києві, Харкові, Одесі, Дніпрі, Запоріжжі, Львові та інших містах України. Технологія GPON забезпечує стабільний інтернет з енергонезалежністю мережі до 96 годин — ваш інтернет працює навіть під час відключення електроенергії. Тарифи на оптичний інтернет від 99 грн/міс з фіксованою ціною на 2 роки. Залишити заявку на підключення інтернету онлайн.
        </p>
      </Box>

      {/* Копірайт */}
      <Box
        className="py-[20px]"
        sx={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}
      >
        <Box className="max-w-[1170px] mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-[8px]">
          <span className="text-white/30 text-[12px]">
            © {new Date().getFullYear()} Офіційний представник АТ «Укртелеком».
          </span>
        </Box>
      </Box>
    </Box>
  );
};
