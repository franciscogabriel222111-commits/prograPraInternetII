const produtos = [];
let proximoID = 1;

function gerarId() {
    return proximoID++;
}

module.exports = {
    produtos,
    proximoID,
    gerarId
};
