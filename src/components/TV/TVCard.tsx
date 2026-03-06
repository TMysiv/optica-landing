import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import { CustomButton } from '../Custom/CustomButton';
import { useState } from 'react';
import { CustomModal } from '../Custom/CustomModal';
import { OptimaDualOffer } from '../../descriptions/OptimaDualOffer';

interface Props {
  max: boolean;
  title: string;
  price: number;
}
export const TVCard = ({ max, title, price }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (value?: string | number) => {
    const event = new CustomEvent('scrollToForm', {
      detail: {
        value: 'Інтернет + Телебачення',
        name: 'service',
      }
    });
    window.dispatchEvent(event);

    const form = document.getElementById('form-section');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(751));

  return (
    <Grid
      size={{ xs: 12, sm: 10, md: 8, lg: 6 }}
      className="bg-white p-10 flex flex-col justify-between tv-card pb-5"
    >
      <h2 className="font-bold text-6xl text-center letter-spacing">{title}</h2>
      <Box className="flex flex-col mt-8 gap-5">
        <Box className="flex justify-between items-center">
          <Box className="flex gap-3 items-center w-1/2">
            <CalendarMonthOutlinedIcon fontSize={isSmall ? 'medium' : 'large'}/>
            <span className="text-2xl">дія акції 1 рік</span>
          </Box>
          <Box className="flex gap-3 items-center w-5/10">
            <WifiOutlinedIcon fontSize={isSmall ? 'medium' : 'large'}/>
            <span className="text-2xl">200 Мбіт/с</span>
          </Box>
        </Box>
        <Box className="flex justify-between items-center">
          <Box className="flex gap-3 items-center w-5/10">
            <DevicesOutlinedIcon fontSize={isSmall ? 'medium' : 'large'}/>
            <span className="text-2xl w-7/10 letter-spacing">дивись на 5ти пристроях</span>
          </Box>
          <Box className="flex gap-3 items-center w-1/2">
            <PersonalVideoOutlinedIcon fontSize={isSmall ? 'medium' : 'large'}/>
            <span className="text-2xl letter-spacing">національні рейтингові канали {max && <span>+ футбольні канали</span>}</span>
          </Box>
        </Box>
      </Box>
      <Box className="flex items-center mt-5 justify-between megogo-price">
        <Box className="relative w-1-2">
          <p className="absolute text-white font-bold text-2xl top-10 left-5 price-month">
            <span className="text-5xl font-extrabold price">{price}</span> грн/міс
          </p>
          <img
            src="/images/megogo-price.svg"
            alt="megogo-price"
            className={`${isSmall ? 'w-20' : ''}`}
          />
        </Box>
        <Box className="w-1/2 flex flex-col gap-3 items-center">
          <CustomButton
            text="ПІДКЛЮЧИТИСЬ"
            width={isSmall ? 180 : 222}
            className={`bg-yellow-850 hover:bg-cyan-500 hover:text-white ${isSmall ? 'text-md' : 'text-lg'}`}
            iconClassName="group-hover:text-yellow-850"
            handleClick={handleClick}
            value="TV"
          />
          <p
            className="text-cyan-500 text-md underline cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            детальніше
          </p>
        </Box>
      </Box>
      <CustomModal open={openModal} handleCLose={handleCloseModal} html={<OptimaDualOffer/>}/>
    </Grid>
  )
}
