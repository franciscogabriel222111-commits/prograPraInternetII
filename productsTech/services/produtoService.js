const produtoRepository = require('../repositories/produtoRepository');

const cadastrar = ({ nome, preco, quantidade }) => {
    const novoProduto = {
        id: produtoRepository.gerarNovoId(),
        nome,
        preco,
        quantidade
    };

    return produtoRepository.salvar(novoProduto);
};

const listar = () => {
    return produtoRepository.listarTodos();
};

const buscarPorId = (id) => {
    return produtoRepository.buscarPorId(id);
};

const atualizar = (id, { nome, preco, quantidade }) => {
    return produtoRepository.atualizar(id, { nome, preco, quantidade });
};

const atualizarParcial = (id, dados) => {
    const { nome, preco, quantidade } = dados;
    const campos = {};

    if (nome !== undefined) campos.nome = nome;
    if (preco !== undefined) campos.preco = preco;
    if (quantidade !== undefined) campos.quantidade = quantidade;

    return produtoRepository.atualizar(id, campos);
};

const deletar = (id) => {
    return produtoRepository.removerPorId(id);
};

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    atualizarParcial,
    deletar
};
