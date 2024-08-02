let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores - nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - R$')[0];
    let valorUnitario = produto.split(' - R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade <= 0) {
        alert("Insira uma quantidade válida");
        document.getElementById('quantidade') = '';
        adicionar()
    }

    //calcular o preco, o subtotal
    let preco = valorUnitario * quantidade;

        //adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span></section>`;

    //atualizar o valor total da compra 
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade') = 0;

}

function limpar() {
    totalGeral = 0;
    carrinho = document.getElementById('lista-produtos').innerHTML = '';
    campoTotal = document.getElementById('valor-total').textContent = 'R$ 0';
}