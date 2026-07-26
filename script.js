const idade = document.getElementById("age");
const peso = document.getElementById("weight");
const altura = document.getElementById("height");

const botaoCalc = document.getElementById("btn-calcular");
const valorImc = document.getElementById("valor-imc");
const classificacao = document.getElementById("classificacao");
const resultado = document.querySelector(".resultado");
const mensagem = document.getElementById("mensagem");

botaoCalc.addEventListener("click", function(){

    if(idade.value === "" || peso.value === "" || altura.value === ""){
        console.log("ENTROU NO ERRO")
        
        mensagem.textContent = "⚠️ Preencha todos os campos!";
        mensagem.classList.add("mostrar-erro");

        resultado.classList.remove("mostrar");
        return;
    }
    mensagem.textContent = "";
    mensagem.classList.remove("mostrar-erro");

    console.log("botao clicado");

    const idadeValor = Number(idade.value);
    const alturaValor = Number(altura.value);
    const alturaMetros = alturaValor / 100;
    const pesoValor = Number(peso.value);
    

    const imc = pesoValor / (alturaMetros * alturaMetros);

    valorImc.textContent = imc.toFixed(2);
        resultado.classList.add("mostrar");


        classificacao.classList.remove(
        "abaixo",
        "normal",
        "sobrepeso",
        "obesidade"
);
    if(imc<18.5){
        
        valorImc.className = "imc-abaixo";
        classificacao.textContent = "Abaixo do peso.";
        classificacao.classList.add("abaixo");
    }
    else if(imc<25){
        
            valorImc.className = "imc-normal";
            classificacao.textContent = "Normal";
            classificacao.classList.add("normal");
            
    }
    else if(imc<30){
        
            valorImc.className = "imc-sobrepeso";
            classificacao.textContent = "Sobrepeso";
            classificacao.classList.add("sobrepeso");
    }
    else{
        
        valorImc.className = "imc-obesidade";
        classificacao.textContent = "Obesidade";
        classificacao.classList.add("obesidade");
    }

});

    
