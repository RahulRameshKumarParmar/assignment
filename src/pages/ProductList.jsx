import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {

  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setAllProducts(data.products);
    }

    getProduct()
  }, [])
  return (
    <div className="grid grid-cols-4 p-5 gap-5">
      {allProducts.map((product) => {
        return (
          <Card className="border border-gray-400 flex flex-col items-center justify-center py-3 px-2"
           key={product.id} sx={{ maxWidth: 345, borderRadius: '15px' }}>
            <CardMedia
              sx={{width: '17vw'}}
              component="img"
              alt="green iguana"
              image={product.thumbnail}
            />
            <CardContent>
              <Typography className="text-center" gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}