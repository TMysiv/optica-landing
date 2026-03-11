import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down(765));

  const menuItems = [
    { label: 'Тарифи', id: 'tarrif-section' },
    { label: 'Обладнання', id: 'equipment-section' },
    { label: 'Підключитись', id: 'form-section' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="header"
      className="flex items-center justify-between pt-[28px] pb-[10px]"
    >

      <Logo/>

      {!isMob && (
        <Box className="flex items-center gap-[32px]">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white/70 hover:text-white text-[15px] font-medium transition-colors duration-200 no-underline"
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </Box>
      )}

      <a
        href={process.env.REACT_APP_PHONE}
        className="flex items-center gap-[10px] no-underline group"
        aria-label="Зателефонувати до Укртелеком"
      >
        <Box
          className="w-[38px] h-[38px] rounded-full bg-[#00B3DC]/20 border border-[#00B3DC]/40 flex items-center justify-center group-hover:bg-[#00B3DC]/40 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3.5 1.5C3.5 1.5 2 1.5 1.5 3C1 4.5 1.5 7.5 4.5 10.5C7.5 13.5 10.5 14 12 13.5C13.5 13 13.5 11.5 13.5 11.5L11 9L9.5 10.5C9.5 10.5 7.5 9.5 6 8C4.5 6.5 3.5 4.5 3.5 4.5L5 3L3.5 1.5Z"
              stroke="#00B3DC"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Box className="flex flex-col">
          <span className="text-[#00B3DC] text-[16px] font-semibold leading-tight group-hover:text-white transition-colors duration-200">
            {process.env.REACT_APP_PHONE}
          </span>
        </Box>
      </a>
    </Box>
  );
};
