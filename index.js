//Sistema contagem de pecas

var Peso = 100;
if(peso >= 100){
    console.log("Peso da peça válido")
}else{
    console.log("Peso da peça inválido")     
}

var ListaDePecas = ['Peso1','Peso2','Peso3','Peso4'];
    console.log("Quantidade de peças: " + ListaDePecas)
if(ListaDePecas.length <=10){
    console.log('As peças já estão cadastradas');
}

for (var i = 0; i < ListaDePecas.length; i ++){
var PecaAtual = ListaDePecas [i];
    if(PecaAtual.lenght <4) {
        console.log(PecaAtual + 'Esta peca possui nome inferior a 4 caracteres!')
    }else{
        console.log(PecaAtual +' Esta peca podera ser cadastrada!')
    }
}