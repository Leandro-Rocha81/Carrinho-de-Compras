let produto;
let nomeProduto;
let valorProduto;
let quantidade;
let valorSubtotal;
let carrinho;
let totalGeral;
let total = 0;

function adicionar() {
    produto = document.getElementById('produto').value;
    nomeProduto = produto.split('-')[0];
    valorProduto = produto.split('R$')[1];
    quantidade = document.getElementById('quantidade');
    valorSubtotal = valorProduto * quantidade.value;
    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul"> ${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    total = total + valorSubtotal;
    totalGeral = document.getElementById('valor-total');
    totalGeral.innerHTML = total;
}

function limpar() {
    valorSubtotal = ' ';
    carrinho.innerHTML = ' ';
    total = 0;
    totalGeral.innerHTML = ' ';
}