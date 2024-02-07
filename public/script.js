const botaoEnviar = document.getElementById('enviar');
const caixaMsg = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click',() => {
    if (caixaMsg.value !== ""){
        socket.emit('nova mensagem',caixaMsg.value);
        caixaMsg.value = "";
    }
});

socket.addEventListener('nova mensagem',(msg) => {
   const elementoMensagem = document.createElement('li') //<li><li/>
   elementoMensagem.textContent = msg; //<li> Alok bigodudo<li/>
   elementoMensagem.classList.add('mensagem');//<li class="mensagem"> Alok bigodudo<li/>
   chat.appendChild(elementoMensagem);
})