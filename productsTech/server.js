const express = require('express');
const app = express();
const PORT = 3000;

const productsRouter = require('./router/products');

app.use(express.json());

app.use('/produtos', productsRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


