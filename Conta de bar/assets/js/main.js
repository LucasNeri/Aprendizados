const btn = document.querySelector('.btn');
const btn10 = document.querySelector('.btn10');

function calcular(preco, pessoas) {
    let divisaoParcial = ( preco / pessoas )
    return divisaoParcial
}

btn.addEventListener('click', function(evento) {
    evento.preventDefault ();

    const item = document.querySelector('.item');
    const preco = document.querySelector('.preco');
    const pessoas = document.querySelector('.pessoas');
    
    let precov = preco.value;
    let pessoasv = pessoas.value;
    let itemv = item.value;

    if (precov.indexOf(',') > -1) {
        precov = precov.replace(/,/,'.')
    }
    
    if (pessoasv.indexOf(',') > -1) {
        pessoasv = pessoasv.replace(/,/,'.')
    }

    const precoc = parseFloat(precov);
    const pessoasc = parseFloat(pessoasv);
   
    if(item.value === '') {
        resultadoErro.innerHTML = `Item inválido <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    if (precoc < 0 || isNaN(precoc)) {
        resultadoErro.innerHTML = `preco inválido <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    if (pessoasc < 0 || isNaN(pessoasc)) {
        resultadoErro.innerHTML = `Quantidade de pessoas inválida <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    let calculo = calcular(precoc, pessoasc)
    calculo = calculo.toFixed(2)

    coeficientes.innerHTML += `A divisão do(a) ${itemv} ficou: ${calculo}R$ por pessoa<br>`
});

btn10.addEventListener('click', function(evento) {
    evento.preventDefault ();

    const item = document.querySelector('.item');
    const preco = document.querySelector('.preco');
    const pessoas = document.querySelector('.pessoas');
    
    let precov = preco.value;
    let pessoasv = pessoas.value;
    let itemv = item.value;

    if (precov.indexOf(',') > -1) {
        precov = precov.replace(/,/,'.')
    }
    
    if (pessoasv.indexOf(',') > -1) {
        pessoasv = pessoasv.replace(/,/,'.')
    }

    const precoc = parseFloat(precov);
    const pessoasc = parseFloat(pessoasv);
   
    if(item.value === '') {
        resultadoErro.innerHTML = `Item inválido <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    if (precoc < 0 || isNaN(precoc)) {
        resultadoErro.innerHTML = `preco inválido <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    if (pessoasc < 0 || isNaN(pessoasc)) {
        resultadoErro.innerHTML = `Quantidade de pessoas inválida <br>`
        return
    } else {
        resultadoErro.innerHTML = ''
    }

    let calculo = calcular(precoc, pessoasc)
    calculo = calculo.toFixed(2) * 1.1

    coeficientes.innerHTML += `A divisão do(a) ${itemv} ficou: ${calculo}R$ por pessoa<br>`
});