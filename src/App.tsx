import React from 'react';
import { Box } from '@mui/material'
import { Banner } from './components/Banner/Banner';
import { Tariffs } from './components/Tarrifs/Tariffs';
import { Equipments } from './components/Equipments/Equipments';
import { Form } from './components/Form/Form';
import { Footer } from './components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import { config } from './config';
import { Reviews } from './components/Reviews/Reviews';

const SITE_URL = config.domain;

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Укртелеком",
  "url": `${SITE_URL}/`,
  "logo": `${SITE_URL}/images/logo.svg`,
  "description": "Підключення оптичного інтернету GPON до 1 Гбіт/с по всій Україні. Енергонезалежна мережа до 96 годин.",
  "areaServed": {
    "@type": "Country",
    "name": "Ukraine"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Тарифи інтернету",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "1 Гбіт/с GPON",
        "description": "Енергонезалежна оптика до 96 годин. Відома ціна на 2 роки.",
        "price": "99",
        "priceCurrency": "UAH"
      },
      {
        "@type": "Offer",
        "name": "Оптимальний дует",
        "description": "Інтернет + MEGOGO. Акція діє 1 рік.",
        "price": "400",
        "priceCurrency": "UAH"
      },
      {
        "@type": "Offer",
        "name": "Максимальний дует",
        "description": "Інтернет + MEGOGO Premium. Ліга Чемпіонів та ТОПовий контент.",
        "price": "550",
        "priceCurrency": "UAH"
      }
    ]
  }
};

function App() {
  return (
    <>
      <Helmet>
        {/* Основні мета-теги */}
        <title>Підключити інтернет до 1 Гбіт/с | Укртелеком GPON</title>
        <meta
          name="description"
          content="Підключи оптичний інтернет GPON від Укртелеком — до 1 Гбіт/с, енергонезалежний до 96 годин. Тариф від 99 грн/міс. Залиш заявку онлайн!"
        />
        <meta name="keywords" content="підключити інтернет, інтернет провайдер Україна, GPON оптика, Укртелеком інтернет, 1 гбіт інтернет" />
        <link rel="canonical" href={SITE_URL} />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Укртелеком" />

        {/* Open Graph (для соцмереж) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Підключити інтернет до 1 Гбіт/с | Укртелеком GPON" />
        <meta property="og:description" content="Оптичний інтернет GPON від Укртелеком — до 1 Гбіт/с, енергонезалежний до 96 годин. Тариф від 99 грн/міс." />
        <meta property="og:image" content={`${SITE_URL}/images/desktop-banner.webp`} />
        <meta property="og:locale" content="uk_UA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Підключити інтернет до 1 Гбіт/с | Укртелеком" />
        <meta name="twitter:description" content="Оптичний інтернет GPON від Укртелеком — до 1 Гбіт/с, від 99 грн/міс." />
        <meta name="twitter:image" content={`${SITE_URL}/images/desktop-banner.webp`} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      <Box className="overflow-hidden">

        <Banner/>

        <Tariffs/>
        <h2 className="equipment-h text-white text-center text-[48px] font-semibold leading-[89%] mb-[49px]">
          Обладнання для оптичного
          <strong className="block mt-[14px] font-bold leading-[89%] uppercase bg-[linear-gradient(94deg,_#FFDC00_-0.62%,_#FFDC00_39.09%,_#FCD246_53.73%,_#FFDC00_74.6%)] bg-clip-text text-transparent">
            інтернету GPON
          </strong>
        </h2>

        <Equipments/>

        <Reviews />

        <h2 className="form-t max-w-[440px] text-white text-center text-[40px] font-bold leading-[117.5%] mt-[133px] mb-[51px] mx-auto uppercase">
          Підключіть інтернет зараз
        </h2>

        <Form/>

        <Footer/>

      </Box>
    </>
  );
}

export default App;
