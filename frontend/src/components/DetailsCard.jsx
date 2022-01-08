import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const DetailsCard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          boxShadow: 2,
          m: 1,
        }}
      >
        <CardMedia
          component="img"
          image={"http://placehold.it/200x200"}
          alt="tempQR"
          sx={{
            display: "flex",
            height: "100%",
            width: "200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div>
          <Typography variant="h5" sx={{ ml: 2, mt: 2, fontWeight: "bold" }}>
            PACKAGE 1
          </Typography>
          <CardContent
            sx={{
              p: 0,
              "&:last-child": {
                paddingBottom: 0,
              },
            }}
          >
            <ul>
              <li>Manufacturer: Pathi Vithanaalu</li>
              <li>Packaged On: 27/08/2021</li>
              <li>Best Before: 30/12/2021</li>
              <li>Price: Rs. 85</li>
              <li>Quantity: 1kg</li>
            </ul>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

export default DetailsCard;
