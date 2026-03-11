import { Box } from '@mui/material'
import { TariffsCard } from './TariffsCard';
import { MarketingFTTx } from '../../descriptions/MarketingFTTx';
import { OptimaDualOffer } from '../../descriptions/OptimaDualOffer';
import { MaxDualOffer } from '../../descriptions/MaxDualOffer';
import { config } from '../../config';
import { Tariff } from '../../types';

export const Tariffs = () => {
  const tariffs: Tariff[] = [
    {
      id: 1,
      name: '1 Гбіт/с',
      img: '/images/gpon.svg',
      price: '99',
      extraPrice: '250',
      modalElement: <MarketingFTTx/>,
      description: ['Енергонезалежна оптика до 96 годин', 'Відома ціна на 2 роки!', 'Знижка 50% на ігри в хмарі'],
    },
    {
      id: 2,
      name: 'Оптимальний дует',
      img: '/images/gpon-megogo.svg',
      price: '400',
      modalElement: <OptimaDualOffer/>,
      description: ['Акція діє 1 рік', 'Енергонезалежна оптика до 96 годин', 'Матчі збірної України', 'Преміальний контент Disney, Paramount', 'TV на п’яти пристроях'],
    },
    {
      id: 3,
      name: 'Максимальний дует',
      img: '/images/gpon-megogo.svg',
      price: '550',
      modalElement: <MaxDualOffer/>,
      description: ['Акція діє 1 рік', 'Енергонезалежна оптика до 96 годин', 'Ліга Чемпіонів, Ліга Європи, Ліга націй та інші ТОПові спортивні події 2026 року!', 'Преміальний контент Disney, Paramount, Warner.Bros, HBO Max', 'TV на п’яти пристроях'],
    },
  ];

  const tariffsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Тарифи інтернету Укртелеком",
    "description": "Оптичний інтернет GPON від Укртелеком — тарифи від 99 грн/міс",
    "itemListElement": tariffs.map((tariff, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Інтернет ${tariff.name} — Укртелеком GPON`,
        "description": tariff.description.join('. '),
        "image": `${config.domain}${tariff.img}`,
        "offers": {
          "@type": "Offer",
          "price": tariff.price,
          "priceCurrency": "UAH",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Укртелеком"
          }
        }
      }
    }))
  };

  return (
    <>
      {/* SEO: Structured Data для тарифів */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tariffsSchema) }}
      />

      {/* SEO: секція з aria-label для accessibility та crawlers */}
      <Box
        className="tariff-section flex justify-between relative mx-auto my-[46px] mb-[152px] max-w-[1170px] w-full"
        component="section"
        aria-label="Тарифи інтернету Укртелеком"
        id="tarrif-section"
      >

        <span aria-hidden="true" className="absolute pointer-events-none z-1 ellipse-4"></span>
        <span aria-hidden="true" className="absolute pointer-events-none z-1 ellipse-5"></span>

        {tariffs.map( ( tariff ) => (
          <TariffsCard
            key={tariff.id}
            id={tariff.id}
            name={tariff.name}
            img={tariff.img}
            price={tariff.price}
            description={tariff.description}
            extraPrice={tariff.extraPrice}
            modalElement={tariff.modalElement}
          />
        ) )}
      </Box>
    </>
  )
}
