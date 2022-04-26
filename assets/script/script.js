let barraProgreso = document.querySelector(".barraProgreso");

let nome = document.querySelector(".nomeValidar");
let email = document.querySelector(".emailValidar");
let mensagem = document.querySelector(".mensagemValidar");
let textMensagem = document.querySelector(".textMensagem");
let contador = 0;
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

textMensagem.innerHTML = "Numero de caracter " + contador + "/100";

function validarNome(){
    if(nome.value.length < 3){
        nome.classList.add("is-invalid");
    }else{
        nome.classList.remove("is-invalid");
        nome.classList.add("is-valid");
        nomeOk = true;
    }
}

function validarEmail(){
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        email.classList.add("is-invalid");
    }else{
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        emailOk = true;
    }
}

function validarMensagem(){
    contador = mensagem.value.length;
    textMensagem.innerHTML = "Numero de caracter " + contador + "/100";

    if (mensagem.value.length > 100) {
        mensagem.classList.add("is-invalid");
        mensagemOk = false;
     } else {
        mensagem.classList.remove("is-invalid");
        mensagemOk = true;
     }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
       alert ('Formulário enviado com sucesso!');
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...');
    }
}
