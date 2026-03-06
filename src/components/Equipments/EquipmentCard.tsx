import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { CustomButton } from '../Custom/CustomButton';
import { useState } from 'react';
import { CustomModal } from '../Custom/CustomModal';
import { Router } from '../../descriptions/Router';

interface Props {
  iconTitle: string;
  price: number;
  icon: string;
  description: string;
}
export const EquipmentCard = ({ iconTitle, price, icon, description }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down(900));
  const isXs = useMediaQuery(theme.breakpoints.down(600));

  const handleClick = (value?: string | number) => {
    const event = new CustomEvent('scrollToForm', {
      detail: {
        value: true,
        name: value === 'mash' ? 'isMash' : 'isRouter',
      }
    });
    window.dispatchEvent(event);

    const form = document.getElementById('form-section');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      className="rounded-3xl flex flex-col border border-gray-300 relative bg-white items-center pb-5 equipment-card"
    >
      <img src={iconTitle} alt="equipment-title" className="h-10 absolute -left-2 top-4"/>
      <img src={icon} alt="equipment" className="h-50 mt-20 w-60"/>
      <span className="text-cyan-500 text-3xl font-extrabold mt-3">{price} грн</span>
      <CustomButton
        text="Замовити"
        width={isSm ? 220 : 190}
        className={`bg-yellow-850 hover:bg-cyan-500  mt-5 hover:text-white ${isXs ? 'text-xl' : 'text-2xl'}`}
        iconClassName="group-hover:text-yellow-850"
        handleClick={handleClick}
        value={description}
      />
      <p
        className="text-cyan-500 text-md underline cursor-pointer mt-5"
        onClick={() => setOpenModal(true)}
      >
        Характеристики
      </p>
      <CustomModal open={openModal} handleCLose={handleCloseModal} html={<Router/>}/>
    </Grid>
  );
};
