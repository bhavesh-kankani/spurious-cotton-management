import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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

export default function RegisterProductModal({ open, handleClose }) {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let temp = {};
    temp.MFD = data.get("MFD") ? "" : "This field is required.";
    temp.EXP = data.get("EXP") ? "" : "This field is required.";
    if (
      new Date(data.get("EXP")).getTime() < new Date(data.get("MFD")).getTime()
    ) {
      temp.MFD = "Manufactured Date must be before Expiry Date.";
      temp.EXP = "Expiry Date must be after Manufactured Date.";
    }
    temp.quantity = /^\d+$/.test(data.get("quantity"))
      ? ""
      : "Invalid quantity.";
    temp.price = /^\d+$/.test(data.get("price")) ? "" : "Invalid price.";
    setErrors({ ...temp });
    return Object.values(temp).every((e) => e === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (validate(data)) {
      console.log({
        MFD: data.get("MFD"),
        EXP: data.get("EXP"),
        variety: data.get("variety"),
        quantity: data.get("quantity"),
        price: data.get("price"),
      });
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
            Register A Product
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  id="MFD"
                  name="MFD"
                  label="Manufactured Date"
                  type="date"
                  fullWidth
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...(errors.MFD && {
                    error: true,
                    helperText: errors.MFD,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="EXP"
                  name="EXP"
                  label="Expiry Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...(errors.EXP && {
                    error: true,
                    helperText: errors.EXP,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Variety</InputLabel>
                  <Select
                    labelId="select-label"
                    id="variety"
                    label="Variety"
                    name="variety"
                    defaultValue="Rajhans"
                    fullWidth
                  >
                    <MenuItem value="Rajhans">Rajhans</MenuItem>
                    <MenuItem value="Buranda">Buranda</MenuItem>
                    <MenuItem value="MRC 270">MRC 270</MenuItem>
                    <MenuItem value="MRC 5156">MRC 5156</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">grams</InputAdornment>
                    ),
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  {...(errors.quantity && {
                    error: true,
                    helperText: errors.quantity,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="price"
                  label="Price"
                  name="price"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  {...(errors.price && {
                    error: true,
                    helperText: errors.price,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
