const express = require('express');
const app = express();
const PORT = 3000;

const produtoRouter = require('./router/produtoRoute');

app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


