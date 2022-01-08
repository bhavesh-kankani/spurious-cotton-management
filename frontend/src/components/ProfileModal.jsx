import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>User Type:</strong> Customer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>First Name:</strong> Nice
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Last Name:</strong> Nice
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Email Address:</strong> nice@nice.com
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
