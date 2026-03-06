import { Box, useMediaQuery, useTheme } from '@mui/material';
import { CustomButton } from '../Custom/CustomButton'
import { Header } from '../Header/Header';

export const Banner = () => {

  const handleClick = () => {
    const form = document.getElementById('form-section');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down(765));

  const bannerImg = isMob
    ? { src: '/images/mob-banner.webp', height: 'h-[645px]', style: { objectPosition: '69% 31%' } }
    : { src: '/images/desktop-banner.webp', height: 'h-[790px]', style: {} };

  const advantages = [
    {
      src: '/images/adv-1.svg',
      text: <>Енергонезалежний<br/><strong>до 96 годин</strong></>,
      alt: 'Енергонезалежний інтернет до 96 годин',
    },
    {
      src: '/images/adv-2.svg',
      text: <>Ціна відома<br/><strong>до 96 годин</strong></>,
      alt: 'Фіксована ціна на інтернет',
    },
    {
      src: '/images/adv-6.svg',
      alt: 'Укртелеком GPON оптика',
    },
    {
      src: '/images/adv-3.svg',
      text: <>Високий рівень<br/><strong>задоволеності клієнтів</strong></>,
      alt: 'Високий рівень задоволеності клієнтів Укртелеком',
    },
    {
      src: '/images/adv-5.svg',
      alt: 'Швидкий інтернет Україна'
    },
  ];

  return (
    <Box className="banner-bg w-screen bg-black relative h-[797px]">
      <Box className="banner-wrapper max-w-[1920px] mx-auto relative h-[797px]">

        <img
          src={bannerImg.src}
          alt="Підключити оптичний інтернет GPON від Укртелеком 1 Гбіт/с"
          className={`w-full ${bannerImg.height} object-cover absolute block`}
          style={bannerImg.style}
          loading="eager"
          fetchPriority="high"
        />

        {['ellipse-1','ellipse-2','ellipse-3'].map((el, i) => (
          <i key={i} className={`absolute pointer-events-none z-1 ${el}`}></i>
        ))}

        <Box className="max-w-[1170px] mx-auto relative z-20 banner-section">
          <Header />
          <h1 className="text-[#00B3DC] font-semibold not-italic text-[74px] leading-[0.89] pt-[81px] max-w-[441px] mb-[26px]">
            Новий стандарт
            <span className="text-white block">швидкості Укртелеком</span>
          </h1>
          <CustomButton
            text='ПІДКЛЮЧИТИ'
            width={!isMob ? 290 : 200}
            className="h-[60px] rounded-[12px] bg-[#00B3DC] text-white text-center text-[20px] font-medium not-italic leading-[0.97] uppercase shadow-[0_0_14px_8px_rgba(0,179,220,0.44)] connect-btn hover:bg-yellow-850 hover:text-black"
            handleClick={handleClick}
          />
          <Box className="advantages-block flex w-full justify-between mt-[129px]">
            {advantages.map((adv, idx) => (
              <Box key={idx} className="flex items-center">
                <img
                  src={adv.src}
                  alt={adv.alt}
                  className="h-[48px]"
                  loading="lazy"
                />
                {adv.text && (
                  <span className="ml-[10px] text-white text-[19px] font-medium not-italic leading-[0.97]">{adv.text}</span>
                )}
              </Box>
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
