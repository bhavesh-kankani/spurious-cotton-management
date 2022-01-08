import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import ScanProductModal from "./ScanProductModal";
import RegisterProductModal from "./RegisterProductModal";

const Homepage = ({ userType }) => {
    const scanText = "Previously Scanned Products";
    const registerText = "Previously Registered Products";
    const scanButtonText = "Scan a Product";
    const registerButtonText = "Register a Product";
    const [customerModalOpen, setCustomerModalOpen] = useState(false);
    const [manufacturerModalOpen, setManufacturerModalOpen] = useState(false);
    const handleCustomerClose = () => {
        setCustomerModalOpen(false);
    };
    const handleManufacturerClose = () => {
        setManufacturerModalOpen(false);
    };
    const handleClick = () => {
        if (userType === "Customer") {
            setCustomerModalOpen(true);
        } else {
            setManufacturerModalOpen(true);
        }
    };
    // useEffect(() => {}, []);
    return (
        <div
            className="content"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <ScanProductModal
                open={customerModalOpen}
                handleClose={handleCustomerClose}
            />
            <RegisterProductModal
                open={manufacturerModalOpen}
                handleClose={handleManufacturerClose}
            />
            <Button variant="contained" size="large" onClick={handleClick}>
                {userType === "Customer" ? scanButtonText : registerButtonText}
            </Button>
            <Box sx={{ mt: 5, width: "80vw" }}>
                <InfoCard
                    heading={userType === "Customer" ? scanText : registerText}
                    type={"details"}
                    // size={"large"}
                />
            </Box>
        </div>
    );
};

export default Homepage;
