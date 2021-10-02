var dataEvento = prompt("agora, Informe a data do evento no formato DD/MM/AAAA");
var qtdParts = 89;
dataEvento = dataEvento.replaceAll('/','');
 
var data1 = dataEvento.substr(4,4)
var data2 = dataEvento.substr(2,2)
var data3 = dataEvento.substr(0,2)
 
//console.log("data 3 2 1 =>  ",data3 + "  " + data2 + "  "+ data1)
//console.log("dataEvento =>  ",dataEvento)
 
var data = new Date();
//console.log("data =>  ",data)
 
var mDia = data.getDate() 
if (mDia < 10) {mDia = "0" + mDia }
//console.log("mDia =>  ",mDia)
 
var mMes = (data.getMonth() + 1)
if (mMes < 10) {mMes = "0" + mMes }
//console.log("mMes =>  ",mMes)
 
//const hoje = (data.getDate() + '-' +  mMes + '-' + data.getFullYear()).replaceAll("-","");
 const     hoje = (data.getFullYear() + '-' +  mMes + '-' + mDia).replaceAll("-","")
//console.log("hoje =>  ",hoje)
//if(dataEvento >= hoje){
 // console.log("(data1+ data2 + data3) => " + (data1+ data2 + data3))
  if((data1+ data2 + data3) > hoje){
    var idade = prompt("Informe a sua idade ?");
    if(idade < 18){
        window.alert("Você não tem idade para participar do evento!   Você tem " + idade + " anos.");
    }else if(idade > 18 && qtdParts < 100){
        window.alert(` Concluído com sucesso!   Você tem ${idade} anos.`)
    }else {
        window.alert(` A quantidade de participantes já foi atingida.`)
    }
} 
else{
    window.alert(`Impossível cadastrar um evento para essa data!`)
  //  console.log("Programa concluido com sucesso!")
}