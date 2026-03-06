import { Box, useMediaQuery, useTheme } from '@mui/material';
import { CustomButton } from '../Custom/CustomButton';
import { ReactElement, useState } from 'react';
import { CustomModal } from '../Custom/CustomModal';

interface Props {
  id: number;
  name: string;
  img: string;
  price: string;
  description: string[];
  modalElement: ReactElement;
  extraPrice?: string;
}
export const TariffsCard = ({ id, img, name, price, description, extraPrice, modalElement }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (value?: string | number) => {
    const event = new CustomEvent('scrollToForm', {
      detail: {
        value: `${name === '1 Гбіт/с' ? 'Інтернет' : name}`,
        name: 'service'
      }
    });
    window.dispatchEvent(event);

    const form = document.getElementById('form-section');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down(1201));

  const imgAlt = name === '1 Гбіт/с'
    ? 'Підключити інтернет GPON 1 Гбіт/с — Укртелеком'
    : `Тариф ${name} — інтернет + MEGOGO від Укртелеком`;

  return (
    <article
      aria-label={`Тариф ${name}, ${price} грн/міс`}
      className="max-w-[377px] w-full h-[697px] rounded-[30px] p-[36px_32px] relative box-border
         shadow-[0_0_31.1px_13px_rgba(0,179,220,0.11)_inset_0_0_0_1px_#00B3DC] tariff-item"
    >
      <Box className="tariff-type">
        <img src={img} alt={imgAlt} className="block h-full w-auto" loading="lazy" width="120" height="60"/>
      </Box>

      <h3 className="tariff-name text-white text-[38px] font-bold not-italic leading-[0.89] m-0 py-[20px] pb-[27px] h-[125px]">
        {name}
      </h3>

      <Box className="tariff-description max-w-[313px] min-h-[209px]">
        {description.map((desc, index) => (
          <Box key={index}>
            {desc.includes('до 96 годин') ? desc.split('до 96 годин').map((d, idx) => (
              <span key={idx}>{d}{idx === 0 && <br />}до 96 годин</span>
            )) : desc}
          </Box>
        ))}
        {extraPrice && (
          <Box>
            Відома ціна на 2 роки!<br />
            Ціна на 2-й рік – <span>{extraPrice}</span> грн/міс.
          </Box>
        )}
      </Box>

      <Box
        className={`tarrif-price ${id !== 3 ? 'mt-[63px]' : 'mt-[46px]'} mb-[29px] text-center block font-semibold not-italic
          bg-gradient-to-r from-[#FFDC00] via-[#FCD246] to-[#FFDC00]
          bg-clip-text text-transparent`}
        data-price={price}
        data-currency="UAH"
      >
        <span className="text-center text-[68px] h-[68px] leading-[0.87] block mb-[1px]">{price}</span>
        <small className="text-center text-[22px] leading-[0.89] block">грн/міс.</small>
      </Box>

      <CustomButton
        text='ПІДКЛЮЧИТИ'
        width={!isMd ? 312 : 266}
        className="rounded-[12px] bg-[#00B3DC] h-[60px] text-white text-center text-[20px] font-medium not-italic leading-[0.97] uppercase tariff-btn hover:bg-yellow-850 hover:text-black"
        handleClick={handleClick}
      />

      <button
        className="block mx-auto mt-[12px] text-center text-[14px] font-medium not-italic leading-[0.97] text-white underline cursor-pointer"
        onClick={() => setOpenModal(true)}
        type="button"
        aria-label={`Детальніше про тариф ${name}`}
      >
        Детальніше
      </button>
      <CustomModal open={openModal} handleCLose={handleCloseModal} html={modalElement}/>
    </article>
  )
}
