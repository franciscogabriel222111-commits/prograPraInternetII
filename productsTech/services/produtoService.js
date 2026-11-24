const { produtos, gerarId } = require('../bd');

const cadastrar = ({ nome, preco, quantidade }) => {
    const novoProduto = {
        id: gerarId(),
        nome,
        preco,
        quantidade
    };

    produtos.push(novoProduto);
    return novoProduto;
};

const listar = () => {
    return produtos;
};

const buscarPorId = (id) => {
    return produtos.find(p => p.id === id) || null;
};

const atualizar = (id, { nome, preco, quantidade }) => {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    produto.nome = nome;
    produto.preco = preco;
    produto.quantidade = quantidade;

    return produto;
};

const atualizarParcial = (id, dados) => {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    const { nome, preco, quantidade } = dados;

    if (nome !== undefined) produto.nome = nome;
    if (preco !== undefined) produto.preco = preco;
    if (quantidade !== undefined) produto.quantidade = quantidade;

    return produto;
};

const deletar = (id) => {
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return false;
    }

    produtos.splice(index, 1);
    return true;
};

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    atualizarParcial,
    deletar
};
