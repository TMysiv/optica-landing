import { Modal, Box, IconButton } from '@mui/material'
import { ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ResponsiveStyleValue } from "@mui/system";

interface Props {
  open: boolean;
  handleCLose: () => void;
  html: ReactElement;
  width?: ResponsiveStyleValue<string | number>
}

export const CustomModal = ({ open, handleCLose, html, width }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleCLose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width || { xs: "80%", md: "50%" },
          maxHeight: "75vh",
          overflowY: "auto",
          backgroundColor: "#233955",
          color: 'white',
          p: 4,
          borderRadius: 4,
          outline: "0",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <IconButton
          onClick={handleCLose}
          sx={{
            position: 'absolute',
            color: 'white',
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        {html}
      </Box>
    </Modal>
  )
}
