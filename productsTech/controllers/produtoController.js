const produtoService = require('../services/produtoService');

const cadastrarProduto = (req, res) => {
    const novoProduto = produtoService.cadastrar(req.body);

    return res.status(201).json(novoProduto);
};

const listarProdutos = (req, res) => {
    return res.json(produtoService.listar());
};

const buscarProdutoPorId = (req, res) => {
    const id = Number(req.params.id);
    const produto = produtoService.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json(produto);
};

const atualizarProduto = (req, res) => {
    const id = Number(req.params.id);
    const produto = produtoService.atualizar(id, req.body);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json(produto);
};

const atualizarParcialProduto = (req, res) => {
    const id = Number(req.params.id);
    const produto = produtoService.atualizarParcial(id, req.body);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json(produto);
};

const deletarProduto = (req, res) => {
    const id = Number(req.params.id);
    const removido = produtoService.deletar(id);

    if (!removido) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json({ mensagem: "Produto excluído com sucesso!" });
};

module.exports = {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
