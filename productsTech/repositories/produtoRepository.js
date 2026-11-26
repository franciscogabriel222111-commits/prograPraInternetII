const { produtos, gerarId } = require('../bd');

const listarTodos = () => {
    return produtos;
};

const buscarPorId = (id) => {
    return produtos.find(p => p.id === id) || null;
};

const salvar = (produto) => {
    produtos.push(produto);
    return produto;
};

const atualizar = (id, campos) => {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    Object.keys(campos).forEach(campo => {
        produto[campo] = campos[campo];
    });

    return produto;
};

const removerPorId = (id) => {
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        return false;
    }

    produtos.splice(index, 1);
    return true;
};

const gerarNovoId = () => {
    return gerarId();
};

module.exports = {
    listarTodos,
    buscarPorId,
    salvar,
    atualizar,
    removerPorId,
    gerarNovoId
};
