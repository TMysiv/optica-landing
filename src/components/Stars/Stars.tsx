import { Box } from '@mui/material';

export const Stars = ({ count }: { count: number }) => (
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
