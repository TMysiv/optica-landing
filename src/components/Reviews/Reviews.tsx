import { Box, useMediaQuery, useTheme } from '@mui/material';

const stats = [
  { value: '25+', label: 'років на ринку', icon: '🏆' },
  { value: '1M+', label: 'клієнтів в Україні', icon: '👥' },
  { value: '96год', label: 'енергонезалежність', icon: '⚡' },
  { value: '1', label: 'Гбіт/с швидкість', icon: '🚀' },
];

const reviews = [
  {
    id: 1,
    name: 'Олена Коваленко',
    city: 'Київ',
    rating: 5,
    text: 'Підключились два місяці тому. Швидкість стабільна, під час відключення світла інтернет працював — це просто рятівник для роботи вдома.',
    date: 'Лютий 2025',
    avatar: 'О',
  },
  {
    id: 2,
    name: 'Максим Сидоренко',
    city: 'Харків',
    rating: 5,
    text: 'Перейшов з іншого провайдера. Різниця відчутна — 1 Гбіт реально 1 Гбіт, не "до 1 Гбіт". Майстер приїхав швидко, все налаштував.',
    date: 'Січень 2025',
    avatar: 'М',
  },
  {
    id: 3,
    name: 'Тетяна Мельник',
    city: 'Львів',
    rating: 5,
    text: 'Взяли тариф з MEGOGO — дуже вигідно. Дітям є що дивитись, якість відео відмінна. Ціна на 2 роки фіксована — це великий плюс в наш час.',
    date: 'Березень 2025',
    avatar: 'Т',
  },
];

const Stars = ({ count }: { count: number }) => (
  <Box className="flex gap-[2px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1L8.545 4.9L12.5 5.27L9.7 7.82L10.545 11.73L7 9.5L3.455 11.73L4.3 7.82L1.5 5.27L5.455 4.9L7 1Z"
          fill={i < count ? '#FFDC00' : '#ffffff20'}
        />
      </svg>
    ))}
  </Box>
);

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Укртелеком",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1243",
    "bestRating": "5"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
    "reviewBody": r.text,
    "datePublished": r.date
  }))
};

export const Reviews = () => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down(765));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <Box
        component="section"
        aria-label="Відгуки клієнтів та статистика Укртелеком"
        className="max-w-[1170px] mx-auto px-4 mt-[80px] mb-[80px]"
        id="reviews-sevtion"
      >
        {/* Лічильники */}
        <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[80px]">
          {stats.map((stat, i) => (
            <Box
              key={i}
              className="rounded-[20px] p-[28px_20px] text-center relative overflow-hidden"
              sx={{
                background: 'linear-gradient(135deg, rgba(0,179,220,0.08) 0%, rgba(0,179,220,0.03) 100%)',
                border: '1px solid rgba(0,179,220,0.2)',
                '&:hover': {
                  border: '1px solid rgba(0,179,220,0.4)',
                  background: 'linear-gradient(135deg, rgba(0,179,220,0.12) 0%, rgba(0,179,220,0.05) 100%)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <span className="text-[28px] block mb-[8px]">{stat.icon}</span>
              <span className="text-[36px] font-bold text-[#FFDC00] block leading-none mb-[6px]">
                {stat.value}
              </span>
              <span className="text-white/60 text-[13px] font-medium leading-tight block">
                {stat.label}
              </span>
            </Box>
          ))}
        </Box>

        {/* Заголовок відгуків */}
        <Box className="text-center mb-[48px]">
          <h2 className="text-white text-[36px] md:text-[42px] font-bold leading-tight mb-[12px]">
            Що кажуть наші клієнти
          </h2>
          <Box className="flex items-center justify-center gap-[10px]">
            <Stars count={5} />
            <span className="text-white/60 text-[15px]">
              4.8 з 5 на основі 1 243 відгуків
            </span>
          </Box>
        </Box>

        {/* Картки відгуків */}
        <Box className={`grid gap-[20px] ${isMob ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {reviews.map((review) => (
            <Box
              key={review.id}
              component="article"
              aria-label={`Відгук від ${review.name}`}
              className="rounded-[20px] p-[28px] flex flex-col gap-[16px]"
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  border: '1px solid rgba(0,179,220,0.3)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Stars count={review.rating} />

              <p className="text-white/80 text-[15px] leading-[1.6] m-0 flex-1">
                "{review.text}"
              </p>

              <Box className="flex items-center gap-[12px] pt-[8px] border-t border-white/10">
                <Box
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-bold text-[16px] flex-shrink-0"
                  sx={{ background: 'linear-gradient(135deg, #00B3DC, #0077A0)' }}
                >
                  {review.avatar}
                </Box>
                <Box>
                  <span className="text-white font-semibold text-[14px] block">
                    {review.name}
                  </span>
                  <span className="text-white/40 text-[12px]">
                    {review.city} · {review.date}
                  </span>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
