import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DetailsCard from "./DetailsCard";

const InfoCard = ({ text, heading, type, size, productData }) => {
    return (
        <Box>
            <Card
                variant="outlined"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 2,
                    overflow: "auto",
                    height: size === "large" ? "40em" : "100%",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mt: 2, fontWeight: "bold" }}
                >
                    {heading}
                </Typography>
                <CardContent
                    sx={{
                        display: "grid",
                        placeItems: "center",
                        paddingX: 2,
                    }}
                >
                    {type === "details" ? (
                        <>
                            {productData.map((data) => (
                                <DetailsCard key={data.id} data={data} />
                            ))}
                        </>
                    ) : (
                        text
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default InfoCard;
