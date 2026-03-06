import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { TVCard } from './TVCard';

export const TVContainer = () => {
  const tariffs = [
    { id: 1, price: 379, title: 'Оптимальний дует', max: false },
    { id: 2, price: 479, title: 'Максимальний дует', max: true },
  ];
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down(1200));

  return (
    <Box className="w-full bg-cyan-500 mt-20 p-10 flex flex-col items-center tv-container max-width-1174">
      <h2 className="text-white text-6xl font-extrabold mb-10 letter-spacing">MEGOGO TV + Інтернет</h2>
      <Grid
        container
        spacing={3}
        className="max-width-1174 w-full"
        direction={isMd ? 'column' : 'row'}
        alignItems="center"
      >
        {tariffs.map((item) => (
          <TVCard key={item.id} price={item.price} title={item.title} max={item.max}/>
        ))}
      </Grid>
    </Box>
  )
}
