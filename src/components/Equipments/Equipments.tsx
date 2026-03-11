import { Box, useMediaQuery, useTheme } from '@mui/material';
import { CustomButton } from '../Custom/CustomButton';
import { useState } from 'react';
import { CustomModal } from '../Custom/CustomModal';
import { Router } from '../../descriptions/Router';
import { config } from '../../config';

const routerSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Гігабітний Wi-Fi роутер TP-Link Mercusys EasyMesh дводіапазонний",
  "description": "Гігабітний Wi-Fi роутер із підтримкою EasyMesh забезпечує стабільне покриття у всій квартирі чи будинку. Протестований фахівцями Укртелеком на мережі GPON.",
  "image": `${config.domain}/images/mesh-router.png`,
  "brand": {
    "@type": "Brand",
    "name": "TP-Link Mercusys"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "1 штука",
      "price": "899",
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Укртелеком" }
    },
    {
      "@type": "Offer",
      "name": "2 штуки",
      "price": "1699",
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Укртелеком" }
    },
    {
      "@type": "Offer",
      "name": "3 штуки",
      "price": "2599",
      "priceCurrency": "UAH",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Укртелеком" }
    }
  ]
};

export const Equipments = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down(1201));

  const handleClick = () => {
    const event = new CustomEvent('scrollToForm', {
      detail: {
        value: true,
        name: 'isMash',
      }
    });
    window.dispatchEvent(event);

    const form = document.getElementById('form-section');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routerSchema) }}
      />

      <Box
        component="section"
        aria-label="Обладнання для інтернету — Wi-Fi роутер TP-Link Mercusys"
        className="equipment-section max-w-[936px] mx-auto relative"
        id="equipment-section"
      >

        <span aria-hidden="true" className="ellipse ellipse-6"></span>
        <span aria-hidden="true" className="ellipse ellipse-7"></span>

        <article
          aria-label="Wi-Fi роутер TP-Link Mercusys EasyMesh"
          className="equipment-block w-[360px] h-[570px] rounded-[24px] shadow-[inset_0_0_0_2px_#E8E8E8] bg-[linear-gradient(179deg,rgba(227,227,227,0)_-32.71%,rgba(242,242,242,0.08)_38.87%,rgba(255,255,255,0)_99.05%)] p-[40px_23px] box-border"
        >

          <h3
            className="equipment-name text-white text-center text-[21px] font-bold leading-[112%] pb-[14px] max-w-[266px] mx-auto"
          >
            Гігабітний Wi-Fi роутер TP-Link Mercusys з функцією EasyMesh, (дводіпазонний)
          </h3>

          <img
            className="equipment-img w-[221px] h-[184px] mx-auto block object-contain"
            src="/images/mesh-router.png"
            alt="Wi-Fi роутер TP-Link Mercusys EasyMesh для GPON інтернету Укртелеком"
            loading="lazy"
          />

          <Box
            className="equipment-price text-white text-center text-[28px] font-normal leading-normal pt-[12px] pb-[28px]"
          >
            1 шт -
            <strong
              className="font-bold bg-[linear-gradient(94deg,_#FFDC00_-0.62%,_#FFDC00_39.09%,_#FCD246_53.73%,_#FFDC00_74.6%)] bg-clip-text text-transparent">
              {' '}899 грн
            </strong>
          </Box>

          <Box
            className="equipment-price-second flex justify-between text-white text-[16px] font-normal leading-normal pb-[14px] max-w-[270px] mx-auto">
            <span>2 шт - <strong className="font-bold">1 699 грн</strong></span>
            <span>3 шт - <strong className="font-bold">2 599 грн</strong></span>
          </Box>

          <CustomButton
            text='КУПИТИ'
            width={!isMd ? 313 : 274}
            className="rounded-[12px] bg-[#00B3DC] h-[60px] text-white text-center text-[20px] font-medium leading-[97%] equipment-btn hover:bg-yellow-850 hover:text-black"
            handleClick={handleClick}
          />

          <button
            className="equipment-info text-white text-center text-[14px] font-medium leading-[97%] underline block mt-[12px] mx-auto cursor-pointer"
            onClick={() => setOpenModal(true)}
            type="button"
            aria-label="Характеристики Wi-Fi роутера TP-Link Mercusys EasyMesh"
          >
            Характеристики
          </button>
        </article>

        {/*<img*/}
        {/*  className="equipment-cable-img absolute right-[-438px] top-[165px]"*/}
        {/*  alt="Оптичне обладнання GPON для підключення інтернету Укртелеком"*/}
        {/*  src="/images/equipment.webp"*/}
        {/*  loading="lazy"*/}
        {/*  width="1064"*/}
        {/*  height="548"*/}
        {/*/>*/}

        <Box
          className="equipment-description max-w-[500px] text-white text-[24px] font-medium leading-[112%] absolute left-[458px] top-[87px]"
        >
          <span><b>Гігабітний Wi-Fi роутер із підтримкою EasyMesh</b> забезпечує стабільне покриття у всій квартирі чи будинку. З ним ви легко можете масштабувати Wi-Fi-покриття за потреби без складних налаштувань — достатньо додати ще один сумісний Router-пристрій </span>
          <strong className="text-[32px] font-bold leading-[110%] mt-[29px] block">
            Протестований фахівцями Укртелеком на мережі GPON
          </strong>
        </Box>
        <CustomModal open={openModal} handleCLose={handleCloseModal} html={<Router/>}/>
      </Box>

    </>
  )
}
