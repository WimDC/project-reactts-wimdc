import { Box, Typography, Unstable_Grid2 } from "@mui/material";
import { Grid } from '@mui/material'; // Grid version 1

const carStockWim = [
 {
  "amount": 2,
  "productId": "TOS6LE57210000",
  "productName": "CLUTCH"
 },
 {
  "amount": 5,
  "productId": "6LH53742000",
  "productName": "CLUTCH-50R-G28-6"
 },
 {
  "amount": 1,
  "productId": "6LH56400000",
  "productName": "CLUTCH-50TL-G33-8"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ11610000",
  "productName": "GEAR PAPER TRAY"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ11608000",
  "productName": "SHAFT PAPER TRAY"
 },
 {
  "amount": 10,
  "productId": "x0-02363000",
  "productName": "Vijs Liftshaft"
 },
 {
  "amount": 3,
  "productId": "6LJ58955000",
  "productName": "ACTR-PR-F-H212"
 },
 {
  "amount": 1,
  "productId": "6LK72102000",
  "productName": "HR-3008A-L"
 },
 {
  "amount": 1,
  "productId": "6LK72101000",
  "productName": "HR-5008A-L"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ02525000",
  "productName": "GEAR-10S29-PR"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ02524000",
  "productName": "GEAR-10S29-IDL"
 },
 {
  "amount": 3,
  "productId": "6LJ58810000",
  "productName": "GEAR-10H21-IDL-FUS-DRV"
 },
 {
  "amount": 1,
  "productId": "6LJ58919000",
  "productName": "GEAR-10H21-IDL-FUS-PR-M"
 },
 {
  "amount": 1,
  "productId": "6LJ58918000",
  "productName": "GEAR-10H24-PR-M"
 },
 {
  "amount": 1,
  "productId": "6LJ54816000",
  "productName": "GEAR-SH68-6-H21X-E"
 },
 {
  "amount": 2,
  "productId": "6LH39253000",
  "productName": "Tandwiel Tonermoter"
 },
 {
  "amount": 1,
  "productId": "6LK42409000",
  "productName": "GEAR-10H21-IDL-PR-H38X"
 },
 {
  "amount": 1,
  "productId": "6LK42507000",
  "productName": "GEAR-10H22-8-H38X"
 },
 {
  "amount": 4,
  "productId": "6LJ54025000",
  "productName": "GRID-CHARGR-MAIN-H21X (FC30)"
 },
 {
  "amount": 1,
  "productId": "6LK72103100",
  "productName": "DEV-KIT-5008A"
 },
 {
  "amount": 1,
  "productId": "6LK49168000",
  "productName": "DEV-KIT-FC505K"
 },
 {
  "amount": 5,
  "productId": "6LA84950000",
  "productName": "SPE-GR"
 },
 {
  "amount": 1,
  "productId": "6LA84910000",
  "productName": "TERM-CH-M-F"
 },
 {
  "amount": 1,
  "productId": "6LK49138000",
  "productName": "LEVER-GRID-CHARGR-H21X"
 },
 {
  "amount": 1,
  "productId": "6LK72103100",
  "productName": "FR-KIT-5008A"
 },
 {
  "amount": 1,
  "productId": "TOS41303611000",
  "productName": "OD 1600"
 },
 {
  "amount": 2,
  "productId": "6LH58311200",
  "productName": "OD 4530"
 },
 {
  "amount": 1,
  "productId": "6LJ59008000",
  "productName": "FR KIT FC50H"
 },
 {
  "amount": 4,
  "productId": "6LJ70598000",
  "productName": "OD-FC50"
 },
 {
  "amount": 1,
  "productId": "6LJ83358000",
  "productName": "OD-2505"
 },
 {
  "amount": 2,
  "productId": "6LK49015000",
  "productName": "OD-FC505"
 },
 {
  "amount": 1,
  "productId": "6LK54110000",
  "productName": "ASYB-GUIDE-READ"
 },
 {
  "amount": 1,
  "productId": "6LJ58603000",
  "productName": "COV-WH-GUIDE-RTN-H212"
 },
 {
  "amount": 1,
  "productId": "6LK40607000",
  "productName": "OD-FC556"
 },
 {
  "amount": 1,
  "productId": "6LK40618000",
  "productName": "EPU-KIT-FC556-G"
 },
 {
  "amount": 1,
  "productId": "6LK42666000",
  "productName": "FR-KIT-FC556-FU"
 },
 {
  "amount": 2,
  "productId": "TOS6LJ54058000",
  "productName": "GEAR"
 },
 {
  "amount": 1,
  "productId": "6LJ54169000",
  "productName": "ASYS-GEAR-IDLE-21Y"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ54056000",
  "productName": "GEAR"
 },
 {
  "amount": 2,
  "productId": "TOS6LH57304000",
  "productName": "BUSH-ROL-TRU"
 },
 {
  "amount": 8,
  "productId": 4401949290,
  "productName": "SEAL-VC6-10-2.5"
 },
 {
  "amount": 8,
  "productId": "F001959000",
  "productName": "Ball Bearing"
 },
 {
  "amount": 5,
  "productId": "6LA29904000",
  "productName": "SEAL-ATC-BLK"
 },
 {
  "amount": 1,
  "productId": "6LK48908000",
  "productName": "GEAR-04H-42-6-IDLE-H373"
 },
 {
  "amount": 3,
  "productId": "6LK48944000",
  "productName": "GRID-CHGR-MAIN-H373-K"
 },
 {
  "amount": 6,
  "productId": "TOSC011250000",
  "productName": "SENSOR EXIT"
 },
 {
  "amount": 4,
  "productId": "TOSC015172000",
  "productName": "SENSOR"
 },
 {
  "amount": 1,
  "productId": "C017839000",
  "productName": "LG2A14BL1"
 },
 {
  "amount": 1,
  "productId": "6LJ60501000",
  "productName": "SNSR-ATC-H210"
 },
 {
  "amount": 3,
  "productId": "C0-20487000",
  "productName": "GP1A173LCS3F (feed sensor o-lcf)"
 },
 {
  "amount": 1,
  "productId": "6LK54047000",
  "productName": "ASYB-SNS-TRAY-L2"
 },
 {
  "amount": 3,
  "productId": "C0-10813000",
  "productName": "GP1A73ARJ00F"
 },
 {
  "amount": 1,
  "productId": "C0-20495000",
  "productName": "LG2A24BL1"
 },
 {
  "amount": 1,
  "productId": "6LK45855000",
  "productName": "SNSR-ATC-H373"
 },
 {
  "amount": 2,
  "productId": "TOS6LE99304000",
  "productName": "ROL KIT 1026"
 },
 {
  "amount": 3,
  "productId": "TOS6LH06996000",
  "productName": "DF KIT FEED RU"
 },
 {
  "amount": 6,
  "productId": "6LK50755000",
  "productName": "ROL-KIT-FC30-U"
 },
 {
  "amount": 1,
  "productId": "6LK41563000",
  "productName": "ROL-KIT-MP2502-U"
 },
 {
  "amount": 3,
  "productId": "6LK41561000",
  "productName": "ROL-KIT-FC75"
 },
 {
  "amount": 1,
  "productId": "6LK41562000",
  "productName": "ROL-KIT-FC75-U"
 },
 {
  "amount": 2,
  "productId": "6LK54293000",
  "productName": "KIT-ROL-DSDF"
 },
 {
  "amount": 1,
  "productId": "6LJ57123100",
  "productName": "ASYB-ROL-SPT-SFB-H21Y-X2S"
 },
 {
  "amount": 2,
  "productId": "6LJ57026000",
  "productName": "ASYS-ROL-SFB-H21X"
 },
 {
  "amount": 1,
  "productId": "TOS6LJ83114000",
  "productName": "THMS-HTR-241"
 },
 {
  "amount": 1,
  "productId": "6LK25742000",
  "productName": "THRMS-HTR-163-S5490"
 },
 {
  "amount": 1,
  "productId": "6LK72411000",
  "productName": "THMS-HTR-H413"
 },
 {
  "amount": 1,
  "productId": "6LH09500000",
  "productName": "FAN-P7530-430M"
 },
 {
  "amount": 2,
  "productId": 4658015106,
  "productName": "Roller Assy"
 },
 {
  "amount": 18,
  "productId": "A00J563600",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "A11U560000",
  "productName": "Roller"
 },
 {
  "amount": 5,
  "productId": "A64J564201",
  "productName": "Paper Feed Roller"
 },
 {
  "amount": 3,
  "productId": "A64J564101",
  "productName": "Paper Feed Roller"
 },
 {
  "amount": 4,
  "productId": "A5C1562200",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": 4537621400,
  "productName": "Roller"
 },
 {
  "amount": 6,
  "productId": "A143PP5200",
  "productName": "Roller"
 },
 {
  "amount": 2,
  "productId": "9J07330102",
  "productName": "Roller"
 },
 {
  "amount": 3,
  "productId": "AA2J560000",
  "productName": "Paper Feed Roller"
 },
 {
  "amount": 2,
  "productId": "A143563100",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": 4138303202,
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "A108563900",
  "productName": "Roller"
 },
 {
  "amount": 2,
  "productId": "A3CFPP4H00",
  "productName": "Roller Assy"
 },
 {
  "amount": 1,
  "productId": "40X8800",
  "productName": "Media present sensor"
 },
 {
  "amount": 1,
  "productId": "A00F623201",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "6LK50635000",
  "productName": "ASYS-CASE-GUIDE-IMG-K11X"
 },
 {
  "amount": 1,
  "productId": "A7V7PP2800",
  "productName": "paper feed assy"
 },
 {
  "amount": 1,
  "productId": "6AG00009213",
  "productName": "DR-FC330"
 },
 {
  "amount": 1,
  "productName": "IUP35Y"
 },
 {
  "amount": 1,
  "productName": "IUP35M"
 },
 {
  "amount": 1,
  "productName": "IUP35C"
 },
 {
  "amount": 1,
  "productName": "IUP35K"
 },
 {
  "amount": 1,
  "productName": "IUP36Y"
 },
 {
  "amount": 1,
  "productName": "IUP36M"
 },
 {
  "amount": 1,
  "productName": "IUP36C"
 },
 {
  "amount": 1,
  "productName": "IUP36K"
 },
 {
  "amount": 1,
  "productId": "6LJ70396000",
  "productName": "BL-FC30TR"
 },
 {
  "amount": 1,
  "productId": "6LL11123000",
  "productName": "DF-FC330"
 },
 {
  "amount": 1,
  "productName": "DR-313K"
 },
 {
  "amount": 3,
  "productName": "DR-313CMY"
 },
 {
  "amount": 1,
  "productName": "DR-316K"
 },
 {
  "amount": 3,
  "productName": "DR-316CMY"
 },
 {
  "amount": 1,
  "productName": "DR-512K"
 },
 {
  "amount": 3,
  "productName": "DR-512CMY"
 },
 {
  "amount": 2,
  "productId": "6LK48905000",
  "productName": "GEAR-04H-29-9-MIX-AG-H373"
 },
 {
  "amount": 2,
  "productId": "6LK48906000",
  "productName": "GEAR-04H-29-9-MIX-SP-H373"
 },
 {
  "amount": 1,
  "productId": "6LK48939000",
  "productName": "ASYS-GEAR-IDLE-H376"
 },
 {
  "amount": 1,
  "productId": "6LK52341000",
  "productName": "GEAR-10S17-8-H373"
 },
 {
  "amount": 1,
  "productId": "6LK56860000",
  "productName": "FR-KIT-FC505H"
 },
 {
  "amount": 4,
  "productId": "A02E561100",
  "productName": "Clutch"
 },
 {
  "amount": 2,
  "productId": "A93E704800",
  "productName": "Cushion"
 },
 {
  "amount": 1,
  "productId": 4658015106,
  "productName": "Roller Assy"
 },
 {
  "amount": 2,
  "productId": "A143563100",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "AA2J560000",
  "productName": "Paper Feed Roller"
 },
 {
  "amount": 1,
  "productId": "A00F623201",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "A11U560000",
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": 4537621400,
  "productName": "Roller"
 },
 {
  "amount": 1,
  "productId": "6LK49167000",
  "productName": "EPU-KIT-FC505CLR"
 }
];

export const Stocks = () => {
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
            </Grid>
            {carStockWim.map(item => 
            <Grid container spacing={0}>
                <Grid xs={1}>
                    <Typography>{item.amount}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productId}</Typography>
                </Grid>
                <Grid xs={2}>
                    <Typography>{item.productName}</Typography>
                </Grid>  
            </Grid>
            )}
        </Box>
    )
}