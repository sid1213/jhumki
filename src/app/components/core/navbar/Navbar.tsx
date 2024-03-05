'use client'
import React, { useEffect, useState } from "react";
import InfoBar from "./InfoBar";
import SaleEndsIn from "./SaleEndsIn";

const Navbar: React.FC = () => {
    const infoBarContents: { key: string | number, content: string | React.ReactNode }[] = [
        { key: '1', content: '<h1>7 Days Free and Easy Returns/COD Available</h1>' },
        { key: '2', content: <SaleEndsIn /> },
        { key: '3', content: '<h1>Flat 300/- Off on Orders Above 2000. Use Code JUMKEY300</h1>' },
        { key: '4', content: '<h1>Worldwide Shipping via DHL</h1>' },
        { key: '5', content: '<h1>Flat 300/- Off on Orders Above 2000. Use Code JUMKEY300</h1>' },
        { key: '6', content: '<h1>Times Honoured Best Fashion Jewellery Brand</h1>' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % infoBarContents.length);
        }, 3000);

        return () => clearInterval(interval);
    }, );

    return (
        <div>
            <InfoBar content={infoBarContents[currentIndex].content} key={infoBarContents[currentIndex].key} />
        </div>
    );
};

export default Navbar;
