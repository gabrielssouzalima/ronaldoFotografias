const inputs = document.querySelectorAll('.inputInfo, .inputInfo2'); 
const botaoEnviar = document.querySelector('.btnEnviar'); 

botaoEnviar.addEventListener('click', function() {
    alert('Verifique sua caixa de entrada e-mail semanalmente para estar por dentro das principais atualizações da galeria.');
    inputs.forEach(input => input.value = ''); 
});
