const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded());


const products = [
  { id: 1, product_name: "Soap", price: 20 },
  { id: 2, product_name: "Milt", price: 20 },
  { id: 3, product_name: "FOAM", price: 20 },
  { id: 4, product_name: "Pillow", price: 20 },
];

app.get('/products', (req, res) => {
    res.send(products);
})

// localhost:3003/product/1
app.get('/product/:id', (req, res) => { 
    const id = req.params.id;

    const product = products.filter(product => {
        if (product.id == id)
            return true;
    })

    res.send(product);
})

// localhost:3000/
app.get('/', (req, res) => {
    res.send("Hello server is up and running")
})

//3000 3030 8000 8080
app.listen(3000, () => {
    console.log('listening on port 3000')
} );


