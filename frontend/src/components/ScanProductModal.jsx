import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QrReader from "react-qr-reader";
import { Button } from "@mui/material";

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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function ScanProductModal({ open, handleClose }) {
  const [inputMode, setInputMode] = useState("upload");
  const [qrResult, setQrResult] = useState("");
  const handleScan = (data) => {
    if (data) {
      setQrResult(data);
      console.log(data);
    }
  };
  const handleError = (error) => {
    console.error(error);
  };
  const handleClick = () => {
    if (inputMode === "upload") {
      setInputMode("camera");
    } else {
      setInputMode("upload");
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Scan A Product
          </Typography>
          <Button variant="text" onClick={handleClick} sx={{ m: 2 }}>
            {inputMode === "camera" ? "Close Camera" : "Open Camera"}
          </Button>
          {inputMode === "camera" && (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
