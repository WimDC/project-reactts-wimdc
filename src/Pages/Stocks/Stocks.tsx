import { Box, Button, Typography, Unstable_Grid2 } from "@mui/material";
import { Grid } from '@mui/material'; // Grid version 1
import { useState } from 'react';
import { Withdraw } from "../../Components/Withdraw";

const carStockWimInitiate = [
 {
  "index": 1,
  "amount": 2,
  "productId": "TOS6LE57210000",
  "productName": "CLUTCH"
 },
 {
  "index": 2,
  "amount": 5,
  "productId": "6LH53742000",
  "productName": "CLUTCH-50R-G28-6"
 },
 {
  "index": 3,
  "amount": 1,
  "productId": "6LH56400000",
  "productName": "CLUTCH-50TL-G33-8"
 },
 {
  "index": 4,
  "amount": 1,
  "productId": "TOS6LJ11610000",
  "productName": "GEAR PAPER TRAY"
 },
 {
  "index": 5,
  "amount": 1,
  "productId": "TOS6LJ11608000",
  "productName": "SHAFT PAPER TRAY"
 },
 {
  "index": 6,
  "amount": 10,
  "productId": "x0-02363000",
  "productName": "Vijs Liftshaft"
 },
 {
  "index": 7,
  "amount": 3,
  "productId": "6LJ58955000",
  "productName": "ACTR-PR-F-H212"
 },
 {
  "index": 8,
  "amount": 1,
  "productId": "6LK72102000",
  "productName": "HR-3008A-L"
 },
 {
  "index": 9,
  "amount": 1,
  "productId": "6LK72101000",
  "productName": "HR-5008A-L"
 },
 {
  "index": 10,
  "amount": 1,
  "productId": "TOS6LJ02525000",
  "productName": "GEAR-10S29-PR"
 },
 {
  "index": 11,
  "amount": 1,
  "productId": "TOS6LJ02524000",
  "productName": "GEAR-10S29-IDL"
 },
 {
  "index": 12,
  "amount": 3,
  "productId": "6LJ58810000",
  "productName": "GEAR-10H21-IDL-FUS-DRV"
 },
 {
  "index": 13,
  "amount": 1,
  "productId": "6LJ58919000",
  "productName": "GEAR-10H21-IDL-FUS-PR-M"
 },
 {
  "index": 14,
  "amount": 1,
  "productId": "6LJ58918000",
  "productName": "GEAR-10H24-PR-M"
 },
 {
  "index": 15,
  "amount": 1,
  "productId": "6LJ54816000",
  "productName": "GEAR-SH68-6-H21X-E"
 },
 {
  "index": 16,
  "amount": 2,
  "productId": "6LH39253000",
  "productName": "Tandwiel Tonermoter"
 },
 {
  "index": 17,
  "amount": 1,
  "productId": "6LK42409000",
  "productName": "GEAR-10H21-IDL-PR-H38X"
 },
 {
  "index": 18,
  "amount": 1,
  "productId": "6LK42507000",
  "productName": "GEAR-10H22-8-H38X"
 },
 {
  "index": 19,
  "amount": 4,
  "productId": "6LJ54025000",
  "productName": "GRID-CHARGR-MAIN-H21X (FC30)"
 },
 {
  "index": 20,
  "amount": 1,
  "productId": "6LK72103100",
  "productName": "DEV-KIT-5008A"
 },
 {
  "index": 21,
  "amount": 1,
  "productId": "6LK49168000",
  "productName": "DEV-KIT-FC505K"
 },
 {
  "index": 22,
  "amount": 5,
  "productId": "6LA84950000",
  "productName": "SPE-GR"
 },
 {
  "index": 23,
  "amount": 1,
  "productId": "6LA84910000",
  "productName": "TERM-CH-M-F"
 },
 {
  "index": 24,
  "amount": 1,
  "productId": "6LK49138000",
  "productName": "LEVER-GRID-CHARGR-H21X"
 },
 {
  "index": 25,
  "amount": 1,
  "productId": "6LK72103100",
  "productName": "FR-KIT-5008A"
 },
 {
  "index": 26,
  "amount": 1,
  "productId": "TOS41303611000",
  "productName": "OD 1600"
 },
 {
  "index": 27,
  "amount": 2,
  "productId": "6LH58311200",
  "productName": "OD 4530"
 },
 {
  "index": 28,
  "amount": 1,
  "productId": "6LJ59008000",
  "productName": "FR KIT FC50H"
 },
 {
  "index": 29,
  "amount": 4,
  "productId": "6LJ70598000",
  "productName": "OD-FC50"
 },
 {
  "index": 30,
  "amount": 1,
  "productId": "6LJ83358000",
  "productName": "OD-2505"
 },
 {
  "index": 31,
  "amount": 2,
  "productId": "6LK49015000",
  "productName": "OD-FC505"
 },
 {
  "index": 32,
  "amount": 1,
  "productId": "6LK54110000",
  "productName": "ASYB-GUIDE-READ"
 },
 {
  "index": 33,
  "amount": 1,
  "productId": "6LJ58603000",
  "productName": "COV-WH-GUIDE-RTN-H212"
 },
 {
  "index": 34,
  "amount": 1,
  "productId": "6LK40607000",
  "productName": "OD-FC556"
 },
 {
  "index": 35,
  "amount": 1,
  "productId": "6LK40618000",
  "productName": "EPU-KIT-FC556-G"
 },
 {
  "index": 36,
  "amount": 1,
  "productId": "6LK42666000",
  "productName": "FR-KIT-FC556-FU"
 },
 {
  "index": 37,
  "amount": 2,
  "productId": "TOS6LJ54058000",
  "productName": "GEAR"
 },
 {
  "index": 38,
  "amount": 1,
  "productId": "6LJ54169000",
  "productName": "ASYS-GEAR-IDLE-21Y"
 },
 {
  "index": 39,
  "amount": 1,
  "productId": "TOS6LJ54056000",
  "productName": "GEAR"
 },
 {
  "index": 40,
  "amount": 2,
  "productId": "TOS6LH57304000",
  "productName": "BUSH-ROL-TRU"
 },
 {
  "index": 41,
  "amount": 8,
  "productId": 4401949290,
  "productName": "SEAL-VC6-10-2.5"
 },
 {
  "index": 42,
  "amount": 8,
  "productId": "F001959000",
  "productName": "Ball Bearing"
 },
 {
  "index": 43,
  "amount": 5,
  "productId": "6LA29904000",
  "productName": "SEAL-ATC-BLK"
 },
 {
  "index": 44,
  "amount": 1,
  "productId": "6LK48908000",
  "productName": "GEAR-04H-42-6-IDLE-H373"
 },
 {
  "index": 45,
  "amount": 3,
  "productId": "6LK48944000",
  "productName": "GRID-CHGR-MAIN-H373-K"
 },
 {
  "index": 46,
  "amount": 6,
  "productId": "TOSC011250000",
  "productName": "SENSOR EXIT"
 },
 {
  "index": 47,
  "amount": 4,
  "productId": "TOSC015172000",
  "productName": "SENSOR"
 },
 {
  "index": 48,
  "amount": 1,
  "productId": "C017839000",
  "productName": "LG2A14BL1"
 },
 {
  "index": 49,
  "amount": 1,
  "productId": "6LJ60501000",
  "productName": "SNSR-ATC-H210"
 },
 {
  "index": 50,
  "amount": 3,
  "productId": "C0-20487000",
  "productName": "GP1A173LCS3F (feed sensor o-lcf)"
 },
 {
  "index": 51,
  "amount": 1,
  "productId": "6LK54047000",
  "productName": "ASYB-SNS-TRAY-L2"
 },
 {
  "index": 52,
  "amount": 3,
  "productId": "C0-10813000",
  "productName": "GP1A73ARJ00F"
 },
 {
  "index": 53,
  "amount": 1,
  "productId": "C0-20495000",
  "productName": "LG2A24BL1"
 },
 {
  "index": 54,
  "amount": 1,
  "productId": "6LK45855000",
  "productName": "SNSR-ATC-H373"
 },
 {
  "index": 55,
  "amount": 2,
  "productId": "TOS6LE99304000",
  "productName": "ROL KIT 1026"
 },
 {
  "index": 56,
  "amount": 3,
  "productId": "TOS6LH06996000",
  "productName": "DF KIT FEED RU"
 },
 {
  "index": 57,
  "amount": 6,
  "productId": "6LK50755000",
  "productName": "ROL-KIT-FC30-U"
 },
 {
  "index": 58,
  "amount": 1,
  "productId": "6LK41563000",
  "productName": "ROL-KIT-MP2502-U"
 },
 {
  "index": 59,
  "amount": 3,
  "productId": "6LK41561000",
  "productName": "ROL-KIT-FC75"
 },
 {
  "index": 60,
  "amount": 1,
  "productId": "6LK41562000",
  "productName": "ROL-KIT-FC75-U"
 },
 {
  "index": 61,
  "amount": 2,
  "productId": "6LK54293000",
  "productName": "KIT-ROL-DSDF"
 },
 {
  "index": 62,
  "amount": 1,
  "productId": "6LJ57123100",
  "productName": "ASYB-ROL-SPT-SFB-H21Y-X2S"
 },
 {
  "index": 63,
  "amount": 2,
  "productId": "6LJ57026000",
  "productName": "ASYS-ROL-SFB-H21X"
 },
 {
  "index": 64,
  "amount": 1,
  "productId": "TOS6LJ83114000",
  "productName": "THMS-HTR-241"
 },
 {
  "index": 65,
  "amount": 1,
  "productId": "6LK25742000",
  "productName": "THRMS-HTR-163-S5490"
 },
 {
  "index": 66,
  "amount": 1,
  "productId": "6LK72411000",
  "productName": "THMS-HTR-H413"
 },
 {
  "index": 67,
  "amount": 1,
  "productId": "6LH09500000",
  "productName": "FAN-P7530-430M"
 },
 {
  "index": 68,
  "amount": 2,
  "productId": 4658015106,
  "productName": "Roller Assy"
 },
 {
  "index": 69,
  "amount": 18,
  "productId": "A00J563600",
  "productName": "Roller"
 },
 {
  "index": 70,
  "amount": 1,
  "productId": "A11U560000",
  "productName": "Roller"
 },
 {
  "index": 71,
  "amount": 5,
  "productId": "A64J564201",
  "productName": "Paper Feed Roller"
 },
 {
  "index": 72,
  "amount": 3,
  "productId": "A64J564101",
  "productName": "Paper Feed Roller"
 },
 {
  "index": 73,
  "amount": 4,
  "productId": "A5C1562200",
  "productName": "Roller"
 },
 {
  "index": 74,
  "amount": 1,
  "productId": 4537621400,
  "productName": "Roller"
 },
 {
  "index": 75,
  "amount": 6,
  "productId": "A143PP5200",
  "productName": "Roller"
 },
 {
  "index": 76,
  "amount": 2,
  "productId": "9J07330102",
  "productName": "Roller"
 },
 {
  "index": 77,
  "amount": 3,
  "productId": "AA2J560000",
  "productName": "Paper Feed Roller"
 },
 {
  "index": 78,
  "amount": 2,
  "productId": "A143563100",
  "productName": "Roller"
 },
 {
  "index": 79,
  "amount": 1,
  "productId": 4138303202,
  "productName": "Roller"
 },
 {
  "index": 80,
  "amount": 1,
  "productId": "A108563900",
  "productName": "Roller"
 },
 {
  "index": 81,
  "amount": 2,
  "productId": "A3CFPP4H00",
  "productName": "Roller Assy"
 },
 {
  "index": 82,
  "amount": 1,
  "productId": "40X8800",
  "productName": "Media present sensor"
 },
 {
  "index": 83,
  "amount": 1,
  "productId": "A00F623201",
  "productName": "Roller"
 },
 {
  "index": 84,
  "amount": 1,
  "productId": "6LK50635000",
  "productName": "ASYS-CASE-GUIDE-IMG-K11X"
 },
 {
  "index": 85,
  "amount": 1,
  "productId": "A7V7PP2800",
  "productName": "paper feed assy"
 },
 {
  "index": 86,
  "amount": 1,
  "productId": "6AG00009213",
  "productName": "DR-FC330"
 },
 {
  "index": 87,
  "amount": 1,
  "productName": "IUP35Y"
 },
 {
  "index": 88,
  "amount": 1,
  "productName": "IUP35M"
 },
 {
  "index": 89,
  "amount": 1,
  "productName": "IUP35C"
 },
 {
  "index": 90,
  "amount": 1,
  "productName": "IUP35K"
 },
 {
  "index": 91,
  "amount": 1,
  "productName": "IUP36Y"
 },
 {
  "index": 92,
  "amount": 1,
  "productName": "IUP36M"
 },
 {
  "index": 93,
  "amount": 1,
  "productName": "IUP36C"
 },
 {
  "index": 94,
  "amount": 1,
  "productName": "IUP36K"
 },
 {
  "index": 95,
  "amount": 1,
  "productId": "6LJ70396000",
  "productName": "BL-FC30TR"
 },
 {
  "index": 96,
  "amount": 1,
  "productId": "6LL11123000",
  "productName": "DF-FC330"
 },
 {
  "index": 97,
  "amount": 1,
  "productName": "DR-313K"
 },
 {
  "index": 98,
  "amount": 3,
  "productName": "DR-313CMY"
 },
 {
  "index": 99,
  "amount": 1,
  "productName": "DR-316K"
 },
 {
  "index": 100,
  "amount": 3,
  "productName": "DR-316CMY"
 },
 {
  "index": 101,
  "amount": 1,
  "productName": "DR-512K"
 },
 {
  "index": 102,
  "amount": 3,
  "productName": "DR-512CMY"
 },
 {
  "index": 103,
  "amount": 2,
  "productId": "6LK48905000",
  "productName": "GEAR-04H-29-9-MIX-AG-H373"
 },
 {
  "index": 104,
  "amount": 2,
  "productId": "6LK48906000",
  "productName": "GEAR-04H-29-9-MIX-SP-H373"
 },
 {
  "index": 105,
  "amount": 1,
  "productId": "6LK48939000",
  "productName": "ASYS-GEAR-IDLE-H376"
 },
 {
  "index": 106,
  "amount": 1,
  "productId": "6LK52341000",
  "productName": "GEAR-10S17-8-H373"
 },
 {
  "index": 107,
  "amount": 1,
  "productId": "6LK56860000",
  "productName": "FR-KIT-FC505H"
 },
 {
  "index": 108,
  "amount": 4,
  "productId": "A02E561100",
  "productName": "Clutch"
 },
 {
  "index": 109,
  "amount": 2,
  "productId": "A93E704800",
  "productName": "Cushion"
 },
 {
  "index": 110,
  "amount": 1,
  "productId": 4658015106,
  "productName": "Roller Assy"
 },
 {
  "index": 111,
  "amount": 2,
  "productId": "A143563100",
  "productName": "Roller"
 },
 {
  "index": 112,
  "amount": 1,
  "productId": "AA2J560000",
  "productName": "Paper Feed Roller"
 },
 {
  "index": 113,
  "amount": 1,
  "productId": "A00F623201",
  "productName": "Roller"
 },
 {
  "index": 114,
  "amount": 1,
  "productId": "A11U560000",
  "productName": "Roller"
 },
 {
  "index": 115,
  "amount": 1,
  "productId": 4537621400,
  "productName": "Roller"
 },
 {
  "index": 116,
  "amount": 1,
  "productId": "6LK49167000",
  "productName": "EPU-KIT-FC505CLR"
 }
];

const withdrawOne = (carStockWim, setCarStockWim, item) => {
    console.log("carstockWim: "+carStockWim);
    item.amount -= 1;
    const updatedItem = {...item, amount: item.amount};
    const newList = carStockWim.filter(listItem => listItem !== item)
    const updatedNewList = [ ...newList, updatedItem]; 
    const sortedUpdatedNewList = updatedNewList.sort((a, b) => a.index - b.index);   
    setCarStockWim(sortedUpdatedNewList);        
            
    console.log("UproductId:"+updatedItem.productId+"   Uproductname:"+updatedItem.productName+"    Uproduct amount: "+updatedItem.amount);
    console.log("productId:"+item.productId+"   productname:"+item.productName+"    product amount: "+item.amount);     
};

export const Stocks = () => {
const [carStockWim, setCarStockWim] = useState(carStockWimInitiate);
    return (
        <Box>
            <Typography variant="h2">STOCK</Typography>
            <Grid container spacing={0}>
                <Grid xs={1}>
                    <Typography variant="h6">Amount</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography variant="h6">productId</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography variant="h6">productName</Typography>
                </Grid> 
                <Grid xs={2}>
                    <Typography variant="h6">
                        
                    </Typography>
                </Grid>   
            </Grid>
            {carStockWim.map((item, index) => 
            <Grid key={index} container spacing={0}>
                <Grid xs={1}>
                    <Typography>{item.amount}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productId}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productName}</Typography>
                </Grid> 
                <Grid xs={2}>
                    <Button onClick={() => withdrawOne(carStockWim, setCarStockWim, item)}>withdraw</Button>
                    <Withdraw carStockWim={carStockWim} setCarStockWim={setCarStockWim} withdrawOne={withdrawOne}/>
                </Grid> 
            </Grid>
            )}
        </Box>
    )
}