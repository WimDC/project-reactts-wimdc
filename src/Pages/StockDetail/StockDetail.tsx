import{ Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom";

export const StockDetail = () => {
    const getStock = localStorage.getItem("stock");

    const { stockId } = useParams();

    const stock = stocks.find((stock) => stock.id === stockId);

    if (!stock) {
 return <Typography>Not found</Typography>
 }

    return (
        <Box>
            <Typography variant='h2'>Stock detail</Typography>
        </Box>
    )
}

//const { stockId } = useParams();

 //const stock = stocks.find((stock) => stock.id === stockId);
 
 //const [allItemsInStock, setALlItemsInStock] = useState<StockItem[]>([]);

// if (!stock) {
 //return <Typography>Not found</Typography>
 //}
 
 //stock.name

// const itemsInStock = allItemsInStock.filter((item) => item.stockId === stockId);

 //const takeItemOutStock = (itemId: String) => {

 //const newItemsInStock = itemsInStock.map(item => item.id === itemId ?  {...item, amount: item.amount - 1}: item);

 //setALlItemsInStock(newItemsInStock);

//const newItem = {id: , product, name, amount: 2}
 //[...itemsInStock, newItem]
//}

//productNumber -- name -- amount -- takeOutButton