const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.post('/', productsController.cadastrarProduto);
router.get('/', productsController.listarProdutos);
router.get('/:id', productsController.buscarProdutoPorId);
router.put('/:id', productsController.atualizarProduto);
router.patch('/:id', productsController.atualizarParcialProduto);
router.delete('/:id', productsController.deletarProduto);

module.exports = router;
