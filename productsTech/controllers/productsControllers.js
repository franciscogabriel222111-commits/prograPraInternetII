const { produtos, gerarId } = require('../bd');

const cadastrarProduto = (req, res) => {
    const { nome, preco, quantidade } = req.body;
    
    const novoProduto = {
        id: gerarId(),
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);
    return res.status(201).json(novoProduto);
};

const listarProdutos = (req, res) => {
    return res.json(produtos);
};

const buscarProdutoPorId = (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    return res.json(produto);
};

const atualizarProduto = (req, res) => {
    const id = Number(req.params.id);
    const { nome, preco, quantidade } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produto.nome = nome;
    produto.preco = preco;
    produto.quantidade = quantidade;

    return res.json(produto);
};

const atualizarParcialProduto = (req, res) => {
    const id = Number(req.params.id);
    const { nome, preco, quantidade } = req.body;

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    if (quantidade !== undefined) produto.quantidade = quantidade;

    return res.json(produto);
};

const deletarProduto = (req, res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produtos.splice(index, 1);
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
