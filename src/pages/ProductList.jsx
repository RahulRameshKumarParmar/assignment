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
    <div className="grid grid-col-4">
      {allProducts.map((product) => {
        return (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={product.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
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