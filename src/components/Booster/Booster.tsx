import { Box } from '@mui/material';

export const Booster = () => {
  return (
    <Box className="max-width-1050 w-full mt-10 flex gap-30 items-center booster">
      <img src="/images/boost.jpeg" alt="booster" className="w-25 h-25"/>
      <p className="text-4xl text-gray-850">
        <span className="text-cyan-500">Ексклюзивна знижка 50% </span>
        на ігри в хмарі для всіх абонентів послуги оптичний інтернет!
      </p>
    </Box>
  )
}
